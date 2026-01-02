const AppShowcase = () => {
  const projects = [
    { id: 1, type: "video", src: "/src/Shahbaz/Slider images/project-1-bank-app-ad.mp4", alt: "Bank App Advertisement", link: "https://drive.google.com/file/d/1TMCmXjkAUu_-1gOKJIprQ4VnXH9H_Jaw/view?usp=sharing" },
    { id: 2, type: "image", src: "/src/Shahbaz/Slider images/project-2-book-cover-design.jpeg", alt: "Book Cover Design", link: "https://drive.google.com/file/d/1cuFqolAn23hY6CMFhOa_X9u1GU3CXlrt/view?usp=sharing" },
    { id: 3, type: "image", src: "/src/Shahbaz/Slider images/project-3-book-cover-design.jpeg", alt: "Book Cover Design", link: "https://drive.google.com/file/d/1jJ4L-5zQEPANKEZrnEeJcEVmPoW-BoMj/view?usp=sharing" },
    { id: 4, type: "video", src: "/src/Shahbaz/Slider images/project-4-bowling-animation.mp4", alt: "Bowling Animation", link: "https://drive.google.com/file/d/1hbLxXq0iOfWYoOudmehZxhDRGvADwqOy/view?usp=sharing" },
    { id: 5, type: "video", src: "/src/Shahbaz/Slider images/projec-5-brand-animation.mp4", alt: "Brand Animation", link: "https://drive.google.com/file/d/1RE2QjoM8MecXT1iJWygICPDWgnCudLTA/view?usp=sharing" },
    { id: 6, type: "image", src: "/src/Shahbaz/Slider images/project-6-business-card-design.jpeg", alt: "Business Card Design", link: "https://drive.google.com/file/d/1jEhYB0wfpzDRutl8Mbo_9Fb2wP2UgVDw/view?usp=sharing" },
    { id: 7, type: "video", src: "/src/Shahbaz/Slider images/project-7-digisync-animation.mp4", alt: "DigiSync Animation", link: "https://drive.google.com/file/d/1UstUBTi-WRG0w9rdTgsnjwAYWWr0cpW_/view?usp=sharing" },
    { id: 8, type: "video", src: "/src/Shahbaz/Slider images/project-8-explainer-video.mp4", alt: "Explainer Video", link: "https://drive.google.com/file/d/1UDzkbzOOKP7DnFzXqWmxSRE90a4j9-Wv/view?usp=sharing" },
    { id: 9, type: "image", src: "/src/Shahbaz/Slider images/project-9-fast-food-ad-post-design.png", alt: "Fast Food Ad Post Design", link: "https://drive.google.com/file/d/1Ox30_7G2zAaBDZPDVx8Ov5_s30wrwdD2/view?usp=sharing" },
    { id: 10, type: "video", src: "/src/Shahbaz/Slider images/project-10-handmade-after-effects-animation.mp4", alt: "Handmade After Effects Animation", link: "https://drive.google.com/file/d/1kUTayJH4Zz6MByuHyOJxnrBJ1jDqZh2D/view?usp=sharing" },
    { id: 11, type: "image", src: "/src/Shahbaz/Slider images/project-11-Professional-Web-Banner-design.jpg", alt: "Professional Web Banner Design", link: "https://drive.google.com/file/d/1LasHZLEmANYUSpDnjcxC2OO7XGGeW9Jk/view?usp=sharing" },
    { id: 12, type: "video", src: "/src/Shahbaz/Slider images/project-12-scene-animation.mp4", alt: "Scene Animation", link: "https://drive.google.com/file/d/15CrnmT9w_lh05GEe91ZnIX8W073QBHIu/view?usp=sharing" },
    { id: 13, type: "video", src: "/src/Shahbaz/Slider images/project-13-shoes-brand-animation.mp4", alt: "Shoes Brand Animation", link: "https://drive.google.com/file/d/1iRrZrAN3HhqGVUqad8HQVZkNsZbVioM3/view?usp=sharing" },
    { id: 14, type: "video", src: "/src/Shahbaz/Slider images/project-14-signature-animation.mp4", alt: "Signature Animation", link: "https://drive.google.com/file/d/1yyCaGV5qimFdctBHfRRVF3VYtdbATInu/view?usp=sharing" },
    { id: 15, type: "video", src: "/src/Shahbaz/Slider images/project-15-smash-text-animation.mp4", alt: "Smash Text Animation", link: "https://drive.google.com/file/d/1OeuI73MOX4CnVL0VwkQx4ZCyzQq3ZbV0/view?usp=sharing" },
    { id: 16, type: "image", src: "/src/Shahbaz/Slider images/project-16-social-media-post-design.jpg", alt: "Social Media Post Design", link: "https://drive.google.com/file/d/1Udx0T9vh1pu-D_ckEwodzouBRn-aVCPl/view?usp=sharing" },
    { id: 17, type: "image", src: "/src/Shahbaz/Slider images/project-17-Social-Media-Post-Design-for-Advertising-Agency.jpg", alt: "Social Media Post Design for Advertising Agency", link: "https://drive.google.com/file/d/1nKmvt3WUWpnxnZOsZTC6MQbibjLKpTQg/view?usp=sharing" },
    { id: 18, type: "image", src: "/src/Shahbaz/Slider images/project-18-visiting-card-design.jpeg", alt: "Visiting Card Design", link: "https://drive.google.com/file/d/18VGJDFpH8TKTjuDQ701uyoxdoKLAEOw8/view?usp=sharing" },
    { id: 19, type: "video", src: "/src/Shahbaz/Slider images/project-19-winep-text-animation.mp4", alt: "Wine Text Animation", link: "https://drive.google.com/file/d/18VGJDFpH8TKTjuDQ701uyoxdoKLAEOw8/view?usp=sharing" },
    { id: 20, type: "image", src: "/src/Shahbaz/Slider images/project-20-food-poster-design.jpg", alt: "Food Poster Design", link: "https://drive.google.com/file/d/1fYLPllf_Fkinj74FiDh-cra6GnW6w8RA/view?usp=sharing" },
    { id: 21, type: "video", src: "/src/Shahbaz/Slider images/project-21-bouncy-animation.mp4", alt: "Bouncy Animation", link: "https://drive.google.com/file/d/1ICmnzvwVU5VJ4-4X06lhJ9qXJ_P9ajWe/view?usp=sharing" }
  ];

  return (
    <div id="work" className="app-showcase py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Work</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] aspect-video bg-black rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-white/20"
            >
              {project.type === "image" ? (
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <video
                  src={project.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata" // Only load metadata to reduce initial load
                  onMouseOver={event => event.target.play()}
                  onMouseOut={event => event.target.pause()}
                />
              )}

              {/* Overlay with View Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
