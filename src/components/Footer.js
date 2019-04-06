import React, { Fragment } from 'react'
const Footer = ({ children }) => {
  return (
    <Fragment>
      {children}

      {/* Google Analytics Code */}
      {
        // site.analytics.google
        // ? <script>
        //   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        //   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        //   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        //   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        //
        //   ga('create', '{{ site.analytics.google.tracker}}', 'auto');
        //   ga('send', 'pageview');
        // </script>
        // : null
      }

      {/* Facebook Pixel Code */}
      {
        // site.analytics.fb
        // ? (
        //   <script>
        //     !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        //     n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        //     n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        //     t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        //       document,'script','https://connect.facebook.net/en_US/fbevents.js');
        //
        //       fbq('init', '{{ site.analytics.fb.tracker}}');
        //       fbq('track', "PageView");
        //   </script>
        //   <noscript><img alt="Facebook pixel" height="1" width="1" style="display:none"
        //     src="https://www.facebook.com/tr?id={{ site.analytics.fb.tracker}}&ev=PageView&noscript=1"
        //   /></noscript>
        // )
        // : null
      }

      {/* Add your custom script for a page in the front-matter `custom_js` attribute */}
      {/* <script src="/assets/js/commons.js"></script>
      <script src="/assets/js/layout.bundle.js"></script>
      {% if page.custom_js %}
      {% for js_file in page.custom_js %}
      // <script src='/assets/js/{{ js_file }}'></script>
      // {% endfor %}
      // {% endif %} */}
    </Fragment>
  )
}

export default Footer
