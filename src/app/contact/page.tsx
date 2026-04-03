"use client";
import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.visionarybizz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section className="pt-24 md:pt-44 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-8 font-display leading-[1.1] tracking-tight">
              Contact Us about <br />
              <span className="text-teal-600 font-display">
                Healthcare Infrastructure and Asset Development Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-md font-medium">
              Unlock the power of our specialized expertise to transform your
              healthcare infrastructure challenges into strategic advantages,
              optimising your portfolio for enhanced value and performance.
            </p>
          </div>
          <div className="bg-slate-50 p-10 border border-slate-100 rounded-md">
            <div className="w-full min-h-150 overflow-hidden">
              <iframe
                src="https://app.visionarybizz.com/widget/form/HxGRzj01ySqFesG8f5RU"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-HxGRzj01ySqFesG8f5RU"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us"
                data-height="1242"
                data-layout-iframe-id="inline-HxGRzj01ySqFesG8f5RU"
                data-form-id="HxGRzj01ySqFesG8f5RU"
                title="Contact Us"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
