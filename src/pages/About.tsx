import React from "react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-amber-900 mb-10 text-center">
          About MM Foods
        </h1>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chocolate products"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex items-center">
            <div>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                Our Journey
              </h2>
              <p className="text-gray-700 leading-relaxed">
                MM Foods was founded with a passion for delivering premium
                chocolate products to households, bakeries, and businesses
                worldwide. What started as a small family-owned venture has now
                grown into a trusted brand known for its uncompromising quality
                and innovative product range.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                From sourcing the finest cocoa beans to collaborating with
                world-class chocolatiers, we ensure that every product reflects
                our dedication to excellence. Today, MM Foods proudly serves
                both retail customers and wholesale partners across multiple
                regions.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Quality First
              </h3>
              <p className="text-gray-600">
                Every product is carefully selected, tested, and packaged to
                meet international quality standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Natural Ingredients
              </h3>
              <p className="text-gray-600">
                We prioritize natural, sustainably sourced ingredients — free
                from harmful additives and preservatives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                We build lasting relationships by providing outstanding service
                and support tailored to your needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-amber-900 mb-6 text-center">
            What We Do
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto leading-relaxed mb-8">
            At MM Foods, we specialize in offering a wide range of premium
            chocolate products including couverture chocolates, cocoa powders,
            spreads, truffles, and customized confectionery solutions. Whether
            you are a professional baker, a café owner, or a chocolate
            enthusiast, we provide the perfect ingredients to bring your
            creations to life.
          </p>
        </div>

        {/* Collaborations */}
        <div className="bg-amber-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4 text-center">
            Collaborations & Partnerships
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto leading-relaxed">
            We proudly collaborate with international suppliers, bakeries,
            restaurants, and retailers to deliver chocolate solutions on a
            global scale. Our B2B partnerships ensure that businesses of all
            sizes have access to world-class products backed by reliable service
            and supply consistency.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Trusted Suppliers
              </h3>
              <p className="text-gray-600">
                Partnered with globally recognized farms and producers to ensure
                ethical sourcing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Wholesale & Retail
              </h3>
              <p className="text-gray-600">
                Flexible solutions for businesses, from bulk supply to
                customized chocolate lines.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Innovation Driven
              </h3>
              <p className="text-gray-600">
                Constantly innovating with new flavors, packaging, and
                sustainable practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="bg-amber-100 p-10 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            Our mission is to inspire creativity and deliver unforgettable taste
            experiences through premium chocolate products. Looking ahead, our
            vision is to become a global leader in sustainable and innovative
            chocolate solutions, while maintaining our core values of quality,
            integrity, and customer trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
