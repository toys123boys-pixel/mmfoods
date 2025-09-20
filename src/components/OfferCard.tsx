import React, { useState } from "react";
import offersData, { Offer } from "../data/offerData";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { getGoogleDriveImageCandidates, resolveImageUrl } from "../lib/utils";
import { motion } from "framer-motion";

const SmartImage: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => {
  const candidates = getGoogleDriveImageCandidates(src);
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const current = resolveImageUrl(candidates[index] || src);

  return (
    <div className="relative w-full h-64"> {/* Updated height */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-amber-100 rounded-xl" />
      )}
      <img
        src={current}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={`w-full h-64 object-cover ${className || ""}`} // Updated height
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (index < candidates.length - 1) setIndex(index + 1);
        }}
      />
    </div>
  );
};

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";

const Offers: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
        Special Offers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offersData.map((offer: Offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card
              className={`border-2 ${
                offer.popular
                  ? "border-amber-600 shadow-lg"
                  : "border-gray-200"
              } hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 rounded-2xl`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Offer Image */}
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <SmartImage
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-64 object-cover" // Match SmartImage height
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                  {offer.popular && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-amber-600 text-white shadow">
                        Popular
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Title + Badge */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-amber-900 line-clamp-1">
                    {offer.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{offer.description}</p>

                {/* Items */}
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {offer.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-lg font-bold text-amber-800">
                    {offer.price.toLocaleString()} PKR
                  </p>
                </div>

                {/* Buy Button */}
                <Button
                  className="mt-auto bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => setSelectedOffer(offer)}
                >
                  Avail Offer
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedOffer}
        onOpenChange={() => setSelectedOffer(null)}
      >
        <DialogContent className="max-w-md rounded-2xl shadow-2xl border border-amber-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mt-5 text-amber-900 flex items-center justify-between">
              {selectedOffer?.title}
              <span className="text-lg font-semibold text-amber-700">
                {selectedOffer?.price.toLocaleString()} PKR
              </span>
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              🎉 To avail this offer, contact us using the details below:
            </DialogDescription>
          </DialogHeader>

          {/* Divider */}
          <div className="border-t border-amber-100 my-2"></div>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-800">
            <div className="flex items-center space-x-3">
              <span className="text-amber-600 text-lg">📍</span>
              <p className="text-sm">
                Lahore military accounts D block mosque ki back side shop #2
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-amber-600 text-lg">📧</span>
              <a
                href="mailto:mmfoods12g@gmail.com"
                className="text-sm hover:underline hover:text-amber-700"
              >
                mmfoods12g@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-amber-600 text-lg">📞</span>
              <a
                href="tel:+923034755570"
                className="text-sm hover:underline hover:text-amber-700"
              >
                +92 3034755570
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-amber-100 my-2"></div>

          {/* Action */}
          <div className="flex justify-end">
            <button
              onClick={() => setSelectedOffer(null)}
              className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-xl shadow"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Offers;
