"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroGlobeOverlay from '@/components/sections/hero/HeroGlobeOverlay';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Globe, MapPin, Cloud, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function WeatherPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="animatedAurora"
      cardStyle="glass-outline"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="WeatherHub"
          navItems={[
            { name: "Cities", id: "cities" },
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroGlobeOverlay
          title="Weather Intelligence for Every City"
          description="Track real-time weather conditions across major cities worldwide. Get accurate forecasts, instant alerts, and detailed meteorological insights powered by advanced climate data."
          tag="Global Coverage"
          tagIcon={Globe}
          buttons={[
            { text: "Explore Cities", href: "#cities" },
            { text: "Learn More", href: "#features" }
          ]}
          className="relative"
          containerClassName="py-20"
          titleClassName="text-5xl font-light"
          descriptionClassName="text-lg"
        />
      </div>
      
      <div id="cities" data-section="cities">
        <ProductCardFive
          title="Major Cities Weather"
          description="Real-time weather data for the world's most important metropolitan areas"
          tag="Live Updates"
          tagIcon={MapPin}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "new-york",
              title: "New York",
              price: "72°F",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815466293-6jz497jh.jpg",
              imageAlt: "New York skyline"
            },
            {
              id: "london",
              title: "London",
              price: "64°F",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815467961-ugd07efq.jpg",
              imageAlt: "London cityscape"
            },
            {
              id: "tokyo",
              title: "Tokyo",
              price: "68°F",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815467147-emmygr4w.jpg",
              imageAlt: "Tokyo metropolitan area"
            },
            {
              id: "sydney",
              title: "Sydney",
              price: "75°F",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815466293-6jz497jh.jpg",
              imageAlt: "Sydney harbor"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardNineteen
          title="Comprehensive Weather Solutions"
          description="Discover the advanced capabilities that make our platform the most trusted weather intelligence service worldwide"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          accordionItems={[
            {
              id: "1",
              title: "99.9% Accuracy Rate",
              content: "Our advanced algorithms and global sensor network deliver the most accurate weather predictions available. Updated every 15 minutes with latest atmospheric data."
            },
            {
              id: "2",
              title: "Instant Updates",
              content: "Get real-time weather alerts and condition updates directly to your device. Never miss a weather event with our intelligent notification system."
            },
            {
              id: "3",
              title: "Anywhere Access",
              content: "Our mobile app provides complete weather intelligence in your pocket. Check conditions, get alerts, and plan your day with ease."
            },
            {
              id: "4",
              title: "Smart Notifications",
              content: "Personalized weather alerts tailored to your location and preferences. Get warned about severe weather before it arrives."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815469696-9k4ph2rv.jpg"
          imageAlt="Weather dashboard"
          mediaPosition="left"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="About WeatherHub"
          description="Leading the global weather intelligence revolution since 2015"
          textboxLayout="default"
          contentTag="Our Mission"
          contentTagIcon={Cloud}
          contentTitle="Empowering Decisions Through Weather Intelligence"
          contentDescription="WeatherHub serves millions of users across 180+ countries with the most reliable weather forecasts and meteorological data. Our team of climate scientists and engineers work continuously to improve accuracy and provide actionable insights for businesses and individuals worldwide."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815465468-7rdpebqw.jpg"
          imageAlt="Global weather network"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Leading Weather Organizations"
          description="Our platform is the choice of meteorological agencies and climate research institutions worldwide"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815476615-kfygv4el.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815477410-8cjkrn1l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815478323-m2yabt7o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815479062-54gqtzc0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815479773-bo8xdilb.jpg"
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="WeatherHub has transformed how we plan our operations. The accuracy and real-time updates are unmatched in the industry. Our teams trust this platform for critical weather-dependent decisions every single day."
          rating={5}
          author="Sarah Chen, Operations Director at Global Logistics Inc."
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815473305-qltgdn99.jpg",
              alt: "Sarah Chen"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815473832-1dup1dvq.jpg",
              alt: "James Wilson"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815474602-ghblp6ve.jpg",
              alt: "Maria Garcia"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765815475314-0ywpq7eh.jpg",
              alt: "David Park"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase
          title="Common Weather Questions"
          description="Find answers to frequently asked questions about our weather forecasting services and platform features"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "How accurate are the weather forecasts?",
              content: "Our forecasts achieve 99.9% accuracy for immediate conditions and 95% accuracy for 7-day forecasts using advanced machine learning models trained on decades of meteorological data combined with real-time satellite and ground sensor information."
            },
            {
              id: "2",
              title: "How often is the weather data updated?",
              content: "All weather data is updated every 15 minutes with the latest atmospheric measurements from our global network of weather stations, satellites, and radars. Critical alerts are pushed immediately when conditions change."
            },
            {
              id: "3",
              title: "Which cities are covered by the service?",
              content: "WeatherHub provides coverage for over 5,000 cities worldwide, including all major metropolitan areas and many smaller towns. You can search for any city and get detailed weather information."
            },
            {
              id: "4",
              title: "Can I get weather alerts for specific conditions?",
              content: "Yes, our intelligent alert system allows you to customize notifications for severe weather, temperature changes, precipitation, wind speeds, and more. You can set different alerts for multiple locations."
            },
            {
              id: "5",
              title: "Is the mobile app available offline?",
              content: "The mobile app stores the last known weather data for your saved locations, allowing you to view recent conditions when offline. However, real-time updates require an active internet connection."
            },
            {
              id: "6",
              title: "How can I integrate WeatherHub into my business?",
              content: "We offer comprehensive APIs and enterprise solutions for businesses needing weather data integration. Contact our sales team to learn about custom packages for weather-dependent operations."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions about our weather services? Contact our team and we'll get back to you within 24 hours."
          useInvertedBackground="noInvert"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "your@email.com",
              required: true
            },
            {
              name: "subject",
              type: "text",
              placeholder: "Subject",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="WeatherHub"
          description="Global weather intelligence platform delivering accurate forecasts and meteorological insights to millions worldwide."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Cities", href: "cities" },
                { label: "Features", href: "features" },
                { label: "Mobile App", href: "#" },
                { label: "API Documentation", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Youtube,
              href: "https://youtube.com",
              ariaLabel: "YouTube"
            }
          ]}
          copyrightText="© 2025 WeatherHub. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}