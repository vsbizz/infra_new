"use client";
import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.visionarybizz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="pt-32 sm:pt-20 md:pt-44 lg:pt-54  bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="w-full max-w-none text-[1.75rem] xs:text-[1.9rem] sm:text-4xl md:text-5xl md:font-bold text-slate-900 mb-4 sm:mb-5 md:mb-8 font-display leading-[1.08] tracking-tight">
              Contact Us about <br />
              <span className="text-teal-600 font-display">
                Healthcare Infrastructure and Asset Development Services
              </span>
            </h2>

            <p className="text-sm sm:text-[15px] md:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-6 md:leading-relaxed max-w-none sm:max-w-md font-medium">
              Unlock the power of our specialized expertise to transform your
              healthcare infrastructure challenges into strategic advantages,
              optimising your portfolio for enhanced value and performance.
            </p>
          </div>

          <div className="bg-slate-50 p-3 sm:p-4 md:p-6 lg:p-8 border border-slate-100 rounded-xl md:rounded-md">
            <div className="w-full min-h-[900px] xs:min-h-[980px] sm:min-h-[1050px] md:min-h-[1150px] lg:min-h-[1242px] overflow-hidden rounded-lg">
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
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
