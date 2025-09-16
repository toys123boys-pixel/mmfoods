import React, { useState } from "react";
import { motion } from "framer-motion";
import { formatCurrency, getGoogleDriveImageCandidates, resolveImageUrl } from "../lib/utils";

const SmartImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const candidates = getGoogleDriveImageCandidates(src);
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const current = resolveImageUrl(candidates[index] || src);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-amber-100" />
      )}
      <img
        src={current}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={className}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (index < candidates.length - 1) setIndex(index + 1);
        }}
      />
    </div>
  );
};
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";

interface ProductCardProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

interface ProductCardProps {
  product: ProductCardProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 rounded-2xl border border-amber-100">
        <div className="relative aspect-square overflow-hidden">
          <SmartImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Bottom gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
          {/* Price pill */}
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1 rounded-full text-white text-sm font-semibold bg-amber-600/90 backdrop-blur">
              {formatCurrency(product.price)}
            </span>
          </div>
          {/* Stock badge */}
          {product.stock < 5 && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-red-600 text-white shadow">Low Stock</Badge>
            </div>
          )}
        </div>

        <CardContent className="p-5">
          <h3 className="font-semibold text-lg mb-2 text-amber-900 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">In stock: {product.stock}</span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDetailOpen(true)}
            >
              Details
            </Button>
            <Button size="sm" onClick={() => setContactOpen(true)}>
              Buy Now
            </Button>
          </div>
        </CardContent>
      </Card>
      </motion.div>

      {/* Details Modal */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-amber-900">{product.name}</DialogTitle>
            <DialogDescription>
              More information about this product.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-3">
            <SmartImage
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg"
            />
            <p className="text-gray-700">{product.description}</p>
            <p className="text-sm text-gray-500">
              Stock Available: {product.stock}
            </p>
            <p className="text-lg font-semibold text-amber-700">
              Price: {formatCurrency(product.price)}
            </p>
          </div>

          <div className="flex justify-end mt-6">
            <Button variant="outline" onClick={() => setDetailOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Us (Buy Now) Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-amber-900">Buy Now</DialogTitle>
            <DialogDescription>
              To avail this product, please contact us:
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-3 text-gray-700">
            <p>
              📍 <span className="font-semibold">Address:</span> Lahore military
              accounts D block mosque ki back side shop #2
            </p>
            <p>
              📧 <span className="font-semibold">Email:</span>{" "}
              mmfoods12g@gmail.com
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> +92 3034755570
            </p>
          </div>

          <div className="flex justify-end mt-6">
            <Button onClick={() => setContactOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
