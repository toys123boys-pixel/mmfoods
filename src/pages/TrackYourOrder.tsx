import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Package,
  Truck,
  MapPin,
  CheckCircle,
  Clock,
  Search,
  Star,
  MessageSquare,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { fetchOrders } from "@/store/slices/ordersSlice";

interface TrackingStatus {
  id: string;
  status: "processing" | "shipped" | "in-transit" | "delivered";
  progress: number;
  location: string;
  estimatedDelivery: string;
  productName: string;
}

const statusConfig = {
  processing: {
    icon: Clock,
    color: "bg-amber-100 text-amber-800",
    label: "Processing",
  },
  shipped: {
    icon: Package,
    color: "bg-blue-100 text-blue-800",
    label: "Shipped",
  },
  "in-transit": {
    icon: Truck,
    color: "bg-orange-100 text-orange-800",
    label: "In Transit",
  },
  delivered: {
    icon: CheckCircle,
    color: "bg-green-100 text-green-800",
    label: "Delivered",
  },
};

export default function TrackProductPage() {
  const [trackingId, setTrackingId] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [trackingMap, setTrackingMap] = useState<
    Record<string, TrackingStatus>
  >({});

  const dispatch = useDispatch();
  const { orders } = useSelector((state: RootState) => state.orders);

  //   const { orders } = useSelector((state: RootState) => state.orders);
  console.log("🔎 Orders from Redux after reload:", orders);

  useEffect(() => {
    dispatch(fetchOrders() as any);
  }, [dispatch]);

  console.log(orders);

  useEffect(() => {
    if (!orders || !Array.isArray(orders)) {
      console.warn("⚠️ Orders is not an array:", orders);
      return;
    }

    const map: Record<string, TrackingStatus> = {};

    orders.forEach((order: any) => {
      if (!order?._id) return; // skip invalid
      const last6 = order._id.slice(-6).toLowerCase();
      const last7 = order._id.slice(-7).toLowerCase();

      const baseData: TrackingStatus = {
        id: last6,
        status: order.status as TrackingStatus["status"],
        progress:
          order.status === "processing"
            ? 25
            : order.status === "shipped"
            ? 50
            : order.status === "in-transit"
            ? 75
            : 100,
        location:
          order.status === "delivered"
            ? "Delivered to your doorstep"
            : "In processing",
        estimatedDelivery: new Date(order.updatedAt).toLocaleDateString(),
        productName: order.items?.[0]?.product?.name || "Chocolate Product",
      };

      map[last6] = baseData;
      map[last7] = baseData;
    });

    console.log("✅ trackingMap keys:", Object.keys(map));
    setTrackingMap(map);
  }, [orders]);

  // 🔎 Handle tracking search
  const handleTrack = () => {
    if (!trackingId.trim()) {
      setError("Please enter a tracking ID");
      return;
    }

    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const normalizedId = trackingId.trim().toLowerCase(); // ✅ always lowercase
      const data = trackingMap[normalizedId];
      if (data) {
        setTrackingData(data);
        setError("");
      } else {
        setTrackingData(null);
        setError("Tracking ID not found. Please check and try again.");
      }
      setIsLoading(false);
    }, 800);
  };

  // ⭐ Handle review submit
  const handleSubmitReview = async () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    setIsSubmittingReview(true);

    setTimeout(() => {
      console.log("Review submitted:", {
        trackingId: trackingData?.id,
        rating,
        reviewText,
      });
      setIsSubmittingReview(false);
      setIsReviewModalOpen(false);
      setRating(0);
      setReviewText("");
      alert("Thank you for your review! Your feedback helps us improve.");
    }, 1000);
  };

  const StatusIcon = trackingData
    ? statusConfig[trackingData.status].icon
    : Clock;

  // 🔎 Re-run track when orders arrive and user already typed ID
  useEffect(() => {
    if (trackingId.trim()) {
      const normalizedId = trackingId.trim().toLowerCase();
      const data = trackingMap[normalizedId];
      if (data) {
        setTrackingData(data);
        setError("");
      }
    }
  }, [trackingMap]); // run whenever map updates

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <main className="container mx-auto px-4 py-8">
        {/* Tracking Input Section */}
        <Card className="max-w-4xl mx-auto mb-8 bg-amber-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white">
              Track Your Order
            </CardTitle>
            <CardDescription className="text-lg text-white">
              Enter your tracking ID to see where your delicious chocolates are
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter tracking ID (e.g., B32B912)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="flex-1 text-lg py-6"
                onKeyPress={(e) => e.key === "Enter" && handleTrack()}
              />
              <Button
                onClick={handleTrack}
                disabled={isLoading || Object.keys(trackingMap).length === 0}
                className="px-8 py-6 text-lg font-semibold bg-amber-600 hover:bg-amber-500"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Tracking...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Track
                  </div>
                )}
              </Button>
            </div>

            {error && (
              <div className="p-4 bg-amber-100 border border-destructive/20 rounded-lg">
                <p className="text-destructive font-medium">{error}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {trackingData && (
          <Card className="max-w-4xl mx-auto bg-amber-800">
            <CardHeader>
              <div className="flex items-center justify-between text-white">
                <div>
                  <CardTitle className="text-2xl">
                    {trackingData.productName}
                  </CardTitle>
                  <CardDescription className="text-lg text-white/80">
                    Tracking ID: {trackingData.id}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={statusConfig[trackingData.status].color}>
                    <StatusIcon className="w-4 h-4 mr-1" />
                    {statusConfig[trackingData.status].label}
                  </Badge>
                  {trackingData.status === "delivered" && (
                    <Dialog
                      open={isReviewModalOpen}
                      onOpenChange={setIsReviewModalOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-amber-50 hover:bg-amber-100 border-amber-200"
                        >
                          <Star className="w-4 h-4 mr-1" />
                          Review Product
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-amber-600" />
                            Review Your Product
                          </DialogTitle>
                          <DialogDescription>
                            How was your {trackingData.productName}? Share your
                            experience!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">
                              Rating
                            </Label>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  onClick={() => setRating(star)}
                                  className="transition-colors"
                                >
                                  <Star
                                    className={`w-8 h-8 ${
                                      star <= rating
                                        ? "fill-amber-400 text-amber-400"
                                        : "text-gray-300 hover:text-amber-300"
                                    }`}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="review"
                              className="text-sm font-medium"
                            >
                              Your Review (Optional)
                            </Label>
                            <Textarea
                              id="review"
                              placeholder="Tell us about your experience..."
                              value={reviewText}
                              onChange={(e: any) =>
                                setReviewText(e.target.value)
                              }
                              className="min-h-[100px] resize-none"
                            />
                          </div>

                          <div className="flex gap-2 pt-2">
                            <Button
                              variant="outline"
                              onClick={() => setIsReviewModalOpen(false)}
                              className="flex-1"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={handleSubmitReview}
                              disabled={isSubmittingReview || rating === 0}
                              className="flex-1 bg-amber-600 hover:bg-amber-700"
                            >
                              {isSubmittingReview ? (
                                <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                  Submitting...
                                </div>
                              ) : (
                                "Submit Review"
                              )}
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-white">
                    Delivery Progress
                  </span>
                  <span className="text-white">{trackingData.progress}%</span>
                </div>
                <Progress
                  value={trackingData.progress}
                  className="h-3 [&>div]:bg-green-500"
                />
              </div>

              {/* Status Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Object.entries(statusConfig).map(([status, config], index) => {
                  const Icon = config.icon;
                  const isActive =
                    Object.keys(statusConfig).indexOf(trackingData.status) >=
                    index;
                  const isCurrent = trackingData.status === status;

                  return (
                    <div
                      key={status}
                      className="flex flex-col items-center text-center space-y-2"
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                          isActive
                            ? "bg-primary border-primary text-primary-foreground"
                            : "bg-muted border-border text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <p
                          className={`font-medium text-sm ${
                            isCurrent ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {config.label}
                        </p>
                        {isCurrent && (
                          <p className="text-xs text-muted-foreground">
                            Current Status
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Location and Delivery Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">
                      Current Location
                    </h3>
                    <p className="text-white/80">{trackingData.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">
                      Estimated Delivery
                    </h3>
                    <p className="text-white/80">
                      {trackingData.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sample Tracking IDs */}
        <div className="max-w-2xl mx-auto mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Try These Sample Tracking IDs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Object.keys(trackingMap).map((id) => (
                  <Button
                    key={id}
                    variant="outline"
                    size="sm"
                    onClick={() => setTrackingId(id)}
                    className="text-xs"
                  >
                    {id}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
