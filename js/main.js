$(function () {
  "use strict";
  var currentYear = new Date().getFullYear();
  //* Languages :
  var portfolio_en = {
    Data: {
      Top: {
        Avatar: "img/face-1.png",
        Name: "Berna Dayoub",
        Post: `Professional Violinist`,
      },
      Scroll: {
        About: [
          ["Age", currentYear - 1996],
          ["Residence", "Lebanon"],
          ["City", "Beirut"],
        ],
        Languages: [
          {
            Id: "circleprog1",
            Type: "Circle",
            Name: "Arabic",
            Progress: "p100",
          },
          {
            Id: "circleprog2",
            Type: "Circle",
            Name: "English",
            Progress: "p95",
          },
          {
            Id: "circleprog3",
            Type: "Circle",
            Name: "French",
            Progress: "p90",
          },
        ],
        Skills: [
          // Violin Techniques :
          {
            Title: "Violin Techniques :",
            items: [
              { id: "lineprog1", Type: "line", Name: "Classical Violin", Progress: "100" },
              { id: "lineprog2", Type: "line", Name: "Jazz Violin", Progress: "90" },
              { id: "lineprog3", Type: "line", Name: "Improvisation", Progress: "95" },
              { id: "lineprog4", Type: "line", Name: "Sight Reading", Progress: "100" },
              { id: "lineprog5", Type: "line", Name: "Music Theory", Progress: "100" },
            ],
          },
          // Performance Styles :
          {
            Title: "Performance Styles :",
            items: [
              { id: "lineprog6", Type: "line", Name: "Solo Performance", Progress: "100" },
              { id: "lineprog7", Type: "line", Name: "Orchestral Playing", Progress: "95" },
              { id: "lineprog8", Type: "line", Name: "Chamber Music", Progress: "90" },
              { id: "lineprog9", Type: "line", Name: "Contemporary Music", Progress: "85" },
            ],
          },
          // Teaching Skills :
          {
            Title: "Teaching Skills :",
            items: [
              { id: "lineprog10", Type: "line", Name: "Violin Pedagogy", Progress: "95" },
              { id: "lineprog11", Type: "line", Name: "Master Classes", Progress: "90" },
              { id: "lineprog12", Type: "line", Name: "Online Lessons", Progress: "85" },
            ],
          },
        ],
        Knowledges: [
          "Extensive repertoire knowledge",
          "Music composition and arrangement",
          "Stage presence and performance",
          "Recording studio experience",
          "Collaboration with other musicians",
          "Music festival participation",
          "Cross-cultural musical fusion",
          "Audience engagement techniques",
          "Music direction",
          "Sound engineering basics",
          "Instrument maintenance",
          "Music business management",
          "Concert planning and production",
          "Music education methodologies",
          "Digital music platforms",
          "Music copyright and licensing",
        ],
        CV: "files/bernadayoub-cv.pdf",
      },
      Bottom: {
        tiktok: [
          "https://www.tiktok.com/@berna_dayoub",
          `<i class="fa-brands fa-tiktok"></i>`,
        ],
        Whatsapp: [
          "https://wa.me/+96181311749",
          `<i class="fa-brands fa-whatsapp"></i>`,
        ],
        Facebook: [
          "https://www.facebook.com/bernadayoub.violin",
          `<i class="fa-brands fa-facebook"></i>`,
        ],
        Instagram: [
          "https://www.instagram.com/bernadayoub.violin",
          `<i class="fa-brands fa-instagram"></i>`,
        ],
        Youtube: [
          "https://www.youtube.com/bernadayoub",
          `<i class="fa-brands fa-youtube"></i>`,
        ],
      },
    },
    Content: {
      home: {
        banner: {
          title: "Discover my Magical <br />Musical World!",
          startStaticPhrae: "&lt;<i>♫</i>&gt; I play",
          slidePhrases: `["soulful melodies.", "classical symphonies.", "Arabic rhythms.", "contemporary fusion.", "heart-touching music."]`,
          endStaticPhrae: "&lt;/<i>♫</i>&gt;",
          btnText: "Listen now",
          btnLink: "",
          linkText: "Book a performance",
          linkUrl: "https://calendly.com/bernadayoub",
          bgImgPath: "img/bg.jpg",
          imgPath: "img/bg.jpg",
        },
        counters: [
          ["Years Performing", currentYear - 2014],
          ["Concerts Played", 120],
          ["Students Taught", 65],
          ["Awards Won", 8],
        ],
        services: [
          {
            title: "Live Performances",
            description: `Experience the magic of live violin music for your events, weddings, corporate functions, and special occasions. I bring emotion and elegance to every performance.`,
            linkUrl: "https://wa.me/+96181311749",
          },
          {
            title: "Music Recording",
            description: `Professional violin recording services for albums, film scores, commercials, and musical projects with high-quality studio equipment.`,
            linkUrl: "https://wa.me/+96181311749",
          },
          {
            title: "Violin Lessons",
            description: `Personalized violin instruction for all levels, from beginners to advanced players, focusing on technique, musicality, and personal expression.`,
            linkUrl: "https://wa.me/+96181311749",
          },
          {
            title: "Music Composition",
            description: `Custom music composition and arrangement services for your projects, blending classical training with contemporary influences.`,
            linkUrl: "https://wa.me/+96181311749",
          },
          {
            title: "Orchestral Work",
            description: `Professional orchestral violin performance with experience in symphony orchestras, chamber ensembles, and musical theater productions.`,
            linkUrl: "https://wa.me/+96181311749",
          },
          {
            title: "Workshops & Masterclasses",
            description: `Educational workshops and masterclasses for music schools, universities, and cultural institutions focusing on violin technique and musical interpretation.`,
            linkUrl: "https://wa.me/+96181311749",
          },
        ],
        prices: [
          {
            title: "String of Beginnings",
            price: `<span>$</span>20<span> / course</span>`,
            isPopular: false,
            conditions: [
              ["Introduction to the basics of violin playing", false],
              ["Understanding violin parts and proper posture", false],
              ["Simple scales and beginner exercises", false],
              ["Developing a sense of rhythm and timing", false],
              ["Reading basic musical notation", false],
              ["Practice strategies for steady progress", false],
              ["Lifetime access to all video lessons", false],
              ["Certificate of completion", true],
              ["Performance evaluation by Berna", true],
              ["Bonus warm-up routines", true],
            ],
            linkUrl: "https://wa.me/+96181311749",
            note: "The first step in your musical journey",
          },
          {
            title: "Tones of Foundation",
            price: `<span>$</span>30<span> / course</span>`,
            isPopular: true,
            conditions: [
              ["Intermediate bow control techniques", false],
              ["Improving finger placement and intonation", false],
              ["Introduction to vibrato", false],
              ["Performing simple musical pieces with expression", false],
              ["Downloadable PDF exercises", false],
              ["Intermediate rhythm and coordination drills", false],
              ["Play-along ensemble practices", false],
              ["Certificate of completion", true],
              ["Access to future lesson updates", true],
              ["Email interaction with Berna", true],
            ],
            linkUrl: "https://wa.me/+96181311749",
            note: "The stage where your musical voice begins to form",
          },
          {
            title: "Rhythm of Progress",
            price: `<span>$</span>40<span> / course</span>`,
            isPopular: false,
            conditions: [
              ["Advanced control of bowing and dynamics", false],
              ["Performing challenging intermediate repertoire", false],
              ["Expanding tonal range and expression", false],
              ["Analyzing complex musical phrases", false],
              ["Applying professional-level techniques", false],
              ["Recording and performance tips", false],
              ["Access to extended video lessons", false],
              ["Certificate of completion", true],
              ["Priority student support", true],
              ["Access to masterclasses", true],
            ],
            linkUrl: "https://wa.me/+96181311749",
            note: "For players ready to advance toward professionalism",
          },
          {
            title: "Voice of Expression",
            price: `<span>$</span>50<span> / course</span>`,
            isPopular: false,
            conditions: [
              ["Emotional control and expressive phrasing", false],
              ["Building a unique artistic identity", false],
              ["Developing stage presence and improvisation", false],
              ["Preparing for concerts and competitions", false],
              ["Artistic and interpretive development", false],
              ["Advanced analysis of musical style", false],
              ["Personal expression and tone shaping", false],
              ["Certificate of excellence", true],
              ["One-on-one evaluation session with Berna", true],
              ["Career guidance and mentorship", true],
            ],
            linkUrl: "https://wa.me/+96181311749",
            note: "A deep exploration of musical emotion and identity",
          },
          {
            title: "The Violin Stage",
            price: `<span>$</span>60<span> / course</span>`,
            isPopular: false,
            conditions: [
              ["Full access to all course levels", false],
              ["Exclusive lessons and behind-the-scenes content", false],
              ["Live private consultations with Berna", false],
              ["Professional performance review and feedback", false],
              ["Opportunities for artistic collaboration", false],
              ["Continuous course updates", false],
              ["Personal long-term development plan", false],
              ["Certificate of mastery", true],
              ["Ongoing mentorship and coaching", true],
              ["Lifetime artistic guidance", true],
            ],
            linkUrl: "https://wa.me/+96181311749",
            note: "The complete violin learning experience from beginner to stage performance",
          },
        ],
        recommendations: [
          {
            imgPath: "img/testimonials/director.jpg",
            name: "Leila Khoury",
            description: "Event Director - Beirut International Festival",
            text: `Berna's performances are simply mesmerizing. Her ability to blend classical technique with Arabic rhythms creates a unique musical experience that captivates audiences. She has been a highlight of our festival for three consecutive years.`,
            stars: 5,
          },
          {
            imgPath: "img/testimonials/student.jpg",
            name: "Yara Chamoun",
            description: "Music Student",
            text: `Studying violin with Berna has transformed my understanding of music. Her teaching methods are innovative yet rooted in solid technique. She inspires her students to find their own musical voice while maintaining technical excellence.`,
            stars: 5,
          },
          {
            imgPath: "img/testimonials/producer.jpg",
            name: "Samir Fares",
            description: "Music Producer",
            text: `Working with Berna in the studio is a producer's dream. Her precision, musicality, and professionalism make every session productive and inspiring. She brings depth and emotion to every note she plays.`,
            stars: 5,
          },
        ],
      },
      gallery: {
        filter_nav: [
          ["*", "All Performances"],
          [".live", "Live Concerts"],
          [".studio", "Studio Recordings"],
          [".teaching", "Teaching"],
        ],
        filter_list: [
          {
            type: "studio",
            imgPath: "img/gallery/studio-1.png",
            title: "Experience",
            description: "",
            templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7185940330875768066?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
            hBG: [true, "#000"],
          },
          {
            type: "studio",
            imgPath: "img/gallery/studio-2.png",
            title: "Memories",
            description: "",
            templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7503671273952709895?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
            hBG: [true, "#000"],
          },
          {
            type: "studio",
            imgPath: "img/gallery/studio-3.png",
            title: "",
            description: "",
            templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7488438898335436040?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
            hBG: [true, "#000"],
          },
        ],
      },
      history: [
        {
          title: "Education",
          data: [
            {
              box: "diplome",
              type: "Master Degree",
              src: "Lebanese National Conservatory",
              title: "Violin Performance",
              date: "2018",
              description: "Master of Music in Violin Performance with honors",
              linkPath: "files/conservatory-diploma.jpg",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Bachelor Degree",
              src: "Higher Institute of Music, Damascus",
              title: "Music Performance",
              date: "2015",
              description: "Bachelor of Arts in Music Performance, Violin Major",
              linkPath: "files/bachelor-diploma.jpg",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Diploma",
              src: "Royal Academy of Music",
              title: "Advanced Violin Studies",
              date: "2019",
              description: "Advanced diploma in violin performance and pedagogy",
              linkPath: "files/royal-academy.jpg",
              havePopup: false,
              popup: null,
            },
          ],
        },
        {
          title: "Performance History",
          data: [
            {
              box: "recommendation",
              type: "Soloist",
              src: "Beirut International Festival",
              title: "Featured Performer",
              date: "2021-2024",
              description: `Annual featured soloist at Lebanon's premier music festival, performing to audiences of 3,000+`,
              linkPath: "https://beirutfestival.org",
              havePopup: false,
              popup: {},
            },
            {
              box: "recommendation",
              type: "Orchestral",
              src: "Lebanese National Symphony",
              title: "First Violin",
              date: "2018-2023",
              description: `First violin section member of the National Symphony Orchestra, performing classical repertoire and contemporary works`,
              linkPath: "https://lns-orchestra.lb",
              havePopup: false,
              popup: {},
            },
            {
              box: "recommendation",
              type: "Teaching",
              src: "Lebanese National Conservatory",
              title: "Violin Professor",
              date: "2019-Present",
              description: `Professor of violin studies, teaching undergraduate and graduate students in performance and pedagogy`,
              linkPath: "https://conservatory.gov.lb",
              havePopup: false,
              popup: {},
            },
          ],
        },
      ],
      contact: [
        {
          id: 1,
          data: [
            ["Country:", "Lebanon", "l"],
            ["City:", "Beirut", "l"],
            ["Studio:", "Music Quarter, Hamra Street", "l"],
          ],
        },
        {
          id: 2,
          data: [
            ["Email:", "me@berna-violin.art", "e"],
            ["Whatsapp:", "+96181311749", "w"],
            ["Studio:", "+96113876543", "p"],
          ],
        },
      ],
    },
    Brand: ["img/brands/violin-1.png", "img/brands/music-2.png"],
    Copyright: ["https://wa.me/+96181311749", "Berna Dayoub"],
    Menu: ["Home", "Gallery", "Career", "Contact"],
    Language: [
      ["EN", true, "en"],
      ["AR", false, "ar"],
      ["FR", false, "fr"],
    ],
    Preloader: {
      id: "preloader",
      Name: "Berna Dayoub",
      JobTitle: "Professional Violinist",
    },
  },
    portfolio_ar = {
      Data: {
        Top: {
          Avatar: "img/face-1.png",
          Name: "بيرنا ديوب",
          Post: `عازفة كمان محترفة`,
        },
        Scroll: {
          About: [
            ["العمر", currentYear - 1996],
            ["البلد", "لبنان"],
            ["المدينة", "بيروت"],
          ],
          Languages: [
            {
              Id: "circleprog1",
              Type: "Circle",
              Name: "العربية",
              Progress: "p100",
            },
            {
              Id: "circleprog2",
              Type: "Circle",
              Name: "الإنجليزية",
              Progress: "p95",
            },
            {
              Id: "circleprog3",
              Type: "Circle",
              Name: "الفرنسية",
              Progress: "p90",
            },
          ],
          Skills: [
            // تقنيات الكمان :
            {
              Title: "تقنيات الكمان :",
              items: [
                { id: "lineprog1", Type: "line", Name: "الكمان الكلاسيكي", Progress: "100" },
                { id: "lineprog2", Type: "line", Name: "كمان الجاز", Progress: "90" },
                { id: "lineprog3", Type: "line", Name: "الارتجال", Progress: "95" },
                { id: "lineprog4", Type: "line", Name: "القراءة البصرية", Progress: "100" },
                { id: "lineprog5", Type: "line", Name: "النظرية الموسيقية", Progress: "100" },
              ],
            },
            // أساليب الأداء :
            {
              Title: "أساليب الأداء :",
              items: [
                { id: "lineprog6", Type: "line", Name: "العزف المنفرد", Progress: "100" },
                { id: "lineprog7", Type: "line", Name: "العزف الأوركسترالي", Progress: "95" },
                { id: "lineprog8", Type: "line", Name: "موسيقى الحجرة", Progress: "90" },
                { id: "lineprog9", Type: "line", Name: "الموسيقى المعاصرة", Progress: "85" },
              ],
            },
            // مهارات التدريس :
            {
              Title: "مهارات التدريس :",
              items: [
                { id: "lineprog10", Type: "line", Name: "طرق تدريس الكمان", Progress: "95" },
                { id: "lineprog11", Type: "line", Name: "صفوف الماستركلاس", Progress: "90" },
                { id: "lineprog12", Type: "line", Name: "الدروس عبر الإنترنت", Progress: "85" },
              ],
            },
          ],
          Knowledges: [
            "معرفة واسعة بالريبورتوار",
            "تأليف وتوزيع الموسيقى",
            "الحضور المسرحي والأداء",
            "خبرة في استوديوهات التسجيل",
            "التعاون مع الموسيقيين الآخرين",
            "المشاركة في المهرجانات الموسيقية",
            "الدمج الموسيقي بين الثقافات",
            "تقنيات جذب الجمهور",
            "الإخراج الموسيقي",
            "أساسيات هندسة الصوت",
            "صيانة الآلات الموسيقية",
            "إدارة الأعمال الموسيقية",
            "تخطيط وإنتاج الحفلات",
            "منهجيات التعليم الموسيقي",
            "المنصات الموسيقية الرقمية",
            "حقوق الطبع والتراخيص الموسيقية",
          ],
          CV: "files/bernadayoub-cv.pdf",
        },
        Bottom: {
          tiktok: [
            "https://www.tiktok.com/@berna_dayoub",
            `<i class="fa-brands fa-tiktok"></i>`,
          ],
          Whatsapp: [
            "https://wa.me/+96181311749",
            `<i class="fa-brands fa-whatsapp"></i>`,
          ],
          Facebook: [
            "https://www.facebook.com/bernadayoub.violin",
            `<i class="fa-brands fa-facebook"></i>`,
          ],
          Instagram: [
            "https://www.instagram.com/bernadayoub.violin",
            `<i class="fa-brands fa-instagram"></i>`,
          ],
          Youtube: [
            "https://www.youtube.com/bernadayoub",
            `<i class="fa-brands fa-youtube"></i>`,
          ],
        },
      },
      Content: {
        home: {
          banner: {
            title: "اكتشف عالمي <br />الموسيقي الساحر!",
            startStaticPhrae: "&lt;<i>♫</i>&gt; أعزف",
            slidePhrases: `["أنغاماً تمسّ الروح.", "سيمفونيات كلاسيكية.", "إيقاعات عربية.", "موسيقى معاصرة.", "موسيقى تلامس القلب."]`,
            endStaticPhrae: "&lt;/<i>♫</i>&gt;",
            btnText: "استمع الآن",
            btnLink: "",
            linkText: "احجز أداءً",
            linkUrl: "https://calendly.com/bernadayoub",
            bgImgPath: "img/bg.jpg",
            imgPath: "img/bg.jpg",
          },
          counters: [
            ["سنوات العزف", currentYear - 2014],
            ["الحفلات الموسيقية", 120],
            ["الطلاب المُدرَّبين", 65],
            ["الجوائز المُحرزة", 8],
          ],
          services: [
            {
              title: "العروض الحية",
              description: `اختبر سحر موسيقى الكمان الحية لفعالياتك وحفلات الزفاف والمناسبات الخاصة. أضفي المشاعر والأناقة على كل أداء.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "التسجيلات الموسيقية",
              description: `خدمات تسجيل كمان احترافية للألبومات وموسيقى الأفلام والإعلانات والمشاريع الموسيقية بمعدات استوديو عالية الجودة.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "دروس الكمان",
              description: `تعليم كمان مخصص لجميع المستويات، من المبتدئين إلى المتقدمين، يركز على التقنية والموسيقية والتعبير الشخصي.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "التأليف الموسيقي",
              description: `خدمات تأليف وتوزيع موسيقي مخصصة لمشاريعك، تمزج بين التدريب الكلاسيكي والتأثيرات المعاصرة.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "العمل الأوركسترالي",
              description: `أداء كمان أوركسترالي احترافي مع خبرة في الأوركسترات السمفونية وموسيقى الحجرة وعروض المسرح الموسيقي.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "ورش العمل والماستركلاس",
              description: `ورش عمل تعليمية وصفوف ماستركلاس لمدارس الموسيقى والجامعات والمؤسسات الثقافية تركز على تقنية الكمان والتفسير الموسيقي.`,
              linkUrl: "https://wa.me/+96181311749",
            },
          ],
          prices: [
            {
              title: "وتر البداية",
              price: `<span>$</span>20<span> / دورة</span>`,
              isPopular: false,
              conditions: [
                ["مقدمة في أساسيات العزف على الكمان", false],
                ["التعرف على أجزاء الآلة ووضعية العزف الصحيحة", false],
                ["تمارين السلالم البسيطة", false],
                ["الإيقاع والعدّ الموسيقي", false],
                ["قراءة النوتة الموسيقية للمبتدئين", false],
                ["نصائح لبناء روتين تدريب فعّال", false],
                ["وصول دائم للفيديوهات التعليمية", false],
                ["شهادة إتمام الدورة", true],
                ["تقييم من بيرنا", true],
                ["تمارين إضافية للإحماء", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "الخطوة الأولى في رحلتك الموسيقية",
            },
            {
              title: "أنغام التأسيس",
              price: `<span>$</span>30<span> / دورة</span>`,
              isPopular: true,
              conditions: [
                ["تقنيات متوسطة في التحكم بالقوس", false],
                ["تحسين وضع الأصابع على الأوتار", false],
                ["البدء بتطبيق الاهتزاز (Vibrato)", false],
                ["عزف مقطوعات بسيطة بإحساس موسيقي", false],
                ["ملفات PDF للتدريب المنزلي", false],
                ["تمارين إيقاع متوسطة الصعوبة", false],
                ["تطبيقات للعزف الجماعي", false],
                ["شهادة إتمام الدورة", true],
                ["تحديثات مستمرة للدروس", true],
                ["تواصل مباشر عبر البريد مع بيرنا", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "المرحلة التي تبني فيها صوتك الموسيقي الحقيقي",
            },
            {
              title: "إيقاع التقدم",
              price: `<span>$</span>40<span> / دورة</span>`,
              isPopular: false,
              conditions: [
                ["تطوير التحكم في الإيقاع والديناميكية", false],
                ["عزف مقطوعات من المستوى المتقدم", false],
                ["توسيع المدى الصوتي والتعبيري", false],
                ["تحليل الجمل الموسيقية المعقدة", false],
                ["تطبيق تقنيات الأداء الاحترافي", false],
                ["نصائح تسجيل ومشاركة الأداء", false],
                ["صفوف فيديو إضافية", false],
                ["شهادة إتمام الدورة", true],
                ["دعم أولوية من بيرنا", true],
                ["وصول إلى ورش الماستر", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "لمن يرغب بالانتقال إلى المستوى الاحترافي",
            },
            {
              title: "صوت التعبير",
              price: `<span>$</span>50<span> / دورة</span>`,
              isPopular: false,
              conditions: [
                ["التحكم بالتعبير العاطفي أثناء العزف", false],
                ["بناء هوية موسيقية خاصة", false],
                ["تطبيق تقنيات الأداء الحي", false],
                ["تطوير الارتجال الموسيقي", false],
                ["إعداد الطالب للمسابقات والعروض", false],
                ["تصميم أسلوب شخصي في العزف", false],
                ["تحليل موسيقي متقدم", false],
                ["شهادة تميز", true],
                ["جلسة تقييم فردية مع بيرنا", true],
                ["توجيه مهني لتطوير المسار الفني", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "رحلة التعبير الحقيقي من خلال الموسيقى",
            },
            {
              title: "مسرح الكمان",
              price: `<span>$</span>60<span> / دورة</span>`,
              isPopular: false,
              conditions: [
                ["وصول شامل إلى جميع المستويات", false],
                ["دروس حصرية ومحتوى خاص بالكواليس", false],
                ["جلسات فردية مباشرة مع بيرنا", false],
                ["تحليل وتقييم أداء احترافي", false],
                ["تعاونات موسيقية حقيقية", false],
                ["تحديثات مستمرة للدروس", false],
                ["خطة تطوير شخصية طويلة المدى", false],
                ["شهادة إتقان عليا", true],
                ["توجيه شخصي متواصل", true],
                ["إشراف مدى الحياة", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "الرحلة الكاملة لعازف الكمان نحو المسرح والاحتراف",
            },
          ],
          recommendations: [
            {
              imgPath: "img/testimonials/director.jpg",
              name: "ليلى خوري",
              description: "مديرة فعاليات - مهرجان بيروت الدولي",
              text: `عروض بيرنا ببساطة تأسر الألباب. قدرتها على مزج التقنية الكلاسيكية مع الإيقاعات العربية تخلق تجربة موسيقية فريدة تفتن الجماهير. لقد كانت نجمًا بارزًا في مهرجاننا لثلاث سنوات متتالية.`,
              stars: 5,
            },
            {
              imgPath: "img/testimonials/student.jpg",
              name: "يارا شمعون",
              description: "طالبة موسيقى",
              text: `دراسة الكمان مع بيرنا غيرت فهمي للموسيقى. طرق تدريسها مبتكرة لكنها متجذرة في تقنية صلبة. هي تلهم طلابها لإيجاد صوتهم الموسيقي الخاص مع الحفاظ على التميز التقني.`,
              stars: 5,
            },
            {
              imgPath: "img/testimonials/producer.jpg",
              name: "سمير فارس",
              description: "منتج موسيقي",
              text: `العمل مع بيرنا في الاستوديو هو حلم أي منتج. دقتها وموسيقيتها واحترافيتها تجعل كل جلسة منتجة وملهمة. هي تجلب العمق والعاطفة إلى كل نوتة تعزفها.`,
              stars: 5,
            },
          ],
        },
        gallery: {
          filter_nav: [
            ["*", "جميع العروض"],
            [".live", "حفلات حية"],
            [".studio", "تسجيلات استوديو"],
            [".teaching", "التدريس"],
          ],
          filter_list: [
            {
              type: "studio",
              imgPath: "img/gallery/studio-1.png",
              title: "Experience",
              description: "",
              templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7185940330875768066?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
              hBG: [true, "#000"],
            },
            {
              type: "studio",
              imgPath: "img/gallery/studio-2.png",
              title: "Memories",
              description: "",
              templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7503671273952709895?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
              hBG: [true, "#000"],
            },
            {
              type: "studio",
              imgPath: "img/gallery/studio-3.png",
              title: "",
              description: "",
              templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7488438898335436040?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
              hBG: [true, "#000"],
            },
          ],
        },
        history: [
          {
            title: "التعليم",
            data: [
              {
                box: "diplome",
                type: "ماجستير",
                src: "المعهد الوطني اللبناني",
                title: "أداء الكمان",
                date: "2018",
                description: "ماجستير في الموسيقى بأداء الكمان بامتياز",
                linkPath: "files/conservatory-diploma.jpg",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "بكالوريوس",
                src: "المعهد العالي للموسيقى، دمشق",
                title: "أداء موسيقي",
                date: "2015",
                description: "بكالوريوس في الآداب بأداء موسيقي، تخصص كمان",
                linkPath: "files/bachelor-diploma.jpg",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "دبلوم",
                src: "الأكاديمية الملكية للموسيقى",
                title: "دراسات كمان متقدمة",
                date: "2019",
                description: "دبلوم متقدم في أداء الكمان وطرق التدريس",
                linkPath: "files/royal-academy.jpg",
                havePopup: false,
                popup: null,
              },
            ],
          },
          {
            title: "السيرة الأدائية",
            data: [
              {
                box: "recommendation",
                type: "عازفة منفردة",
                src: "مهرجان بيروت الدولي",
                title: "عازفة مميزة",
                date: "2021-2024",
                description: `عازفة منفردة مميزة سنوياً في أهم مهرجان موسيقي في لبنان، تؤدي أمام جماهير تزيد عن 3000 شخص`,
                linkPath: "https://beirutfestival.org",
                havePopup: false,
                popup: {},
              },
              {
                box: "recommendation",
                type: "أوركسترالية",
                src: "الأوركسترا السمفونية اللبنانية",
                title: "كمان أول",
                date: "2018-2023",
                description: `عضو في قسم الكمان الأول في الأوركسترا السمفونية الوطنية، تؤدي الريبورتوار الكلاسيكي والأعمال المعاصرة`,
                linkPath: "https://lns-orchestra.lb",
                havePopup: false,
                popup: {},
              },
              {
                box: "recommendation",
                type: "تدريس",
                src: "المعهد الوطني اللبناني",
                title: "أستاذة كمان",
                date: "2019-حتى الآن",
                description: `أستاذة دراسات الكمان، تدرّس طلاب البكالوريوس والدراسات العليا في الأداء وطرق التدريس`,
                linkPath: "https://conservatory.gov.lb",
                havePopup: false,
                popup: {},
              },
            ],
          },
        ],
        contact: [
          {
            id: 1,
            data: [
              ["البلد:", "لبنان", "l"],
              ["المدينة:", "بيروت", "l"],
              ["الاستوديو:", "حي الموسيقى، شارع الحمراء", "l"],
            ],
          },
          {
            id: 2,
            data: [
              ["البريد الإلكتروني:", "me@berna-violin.art", "e"],
              ["الواتساب:", "+96181311749", "w"],
              ["الاستوديو:", "+96113876543", "p"],
            ],
          },
        ],
      },
      Brand: ["img/brands/violin-1.png", "img/brands/music-2.png"],
      Copyright: ["https://wa.me/+96181311749", "بيرنا ديوب"],
      Menu: ["الرئيسية", "المعرض", "السيرة", "اتصل بي"],
      Language: [
        ["EN", false, "en"],
        ["ع", true, "ar"],
        ["FR", false, "fr"],
      ],
      Preloader: {
        id: "preloader",
        Name: "بيرنا ديوب",
        JobTitle: "عازفة كمان محترفة",
      },
    },
    portfolio_fr = {
      Data: {
        Top: {
          Avatar: "img/face-1.png",
          Name: "Berna Dayoub",
          Post: `Violoniste Professionnelle`,
        },
        Scroll: {
          About: [
            ["Âge", currentYear - 1996],
            ["Résidence", "Liban"],
            ["Ville", "Beyrouth"],
          ],
          Languages: [
            {
              Id: "circleprog1",
              Type: "Circle",
              Name: "Arabe",
              Progress: "p100",
            },
            {
              Id: "circleprog2",
              Type: "Circle",
              Name: "Anglais",
              Progress: "p95",
            },
            {
              Id: "circleprog3",
              Type: "Circle",
              Name: "Français",
              Progress: "p90",
            },
          ],
          Skills: [
            // Techniques de Violon :
            {
              Title: "Techniques de Violon :",
              items: [
                { id: "lineprog1", Type: "line", Name: "Violon Classique", Progress: "100" },
                { id: "lineprog2", Type: "line", Name: "Violon Jazz", Progress: "90" },
                { id: "lineprog3", Type: "line", Name: "Improvisation", Progress: "95" },
                { id: "lineprog4", Type: "line", Name: "Lecture à Vue", Progress: "100" },
                { id: "lineprog5", Type: "line", Name: "Théorie Musicale", Progress: "100" },
              ],
            },
            // Styles de Performance :
            {
              Title: "Styles de Performance :",
              items: [
                { id: "lineprog6", Type: "line", Name: "Performance Solo", Progress: "100" },
                { id: "lineprog7", Type: "line", Name: "Jeu Orchestral", Progress: "95" },
                { id: "lineprog8", Type: "line", Name: "Musique de Chambre", Progress: "90" },
                { id: "lineprog9", Type: "line", Name: "Musique Contemporaine", Progress: "85" },
              ],
            },
            // Compétences Pédagogiques :
            {
              Title: "Compétences Pédagogiques :",
              items: [
                { id: "lineprog10", Type: "line", Name: "Pédagogie du Violon", Progress: "95" },
                { id: "lineprog11", Type: "line", Name: "Classes de Maître", Progress: "90" },
                { id: "lineprog12", Type: "line", Name: "Cours en Ligne", Progress: "85" },
              ],
            },
          ],
          Knowledges: [
            "Connaissance extensive du répertoire",
            "Composition et arrangement musical",
            "Présence scénique et performance",
            "Expérience en studio d'enregistrement",
            "Collaboration avec d'autres musiciens",
            "Participation à des festivals de musique",
            "Fusion musicale interculturelle",
            "Techniques d'engagement du public",
            "Direction musicale",
            "Bases du génie sonore",
            "Entretien des instruments",
            "Gestion des affaires musicales",
            "Planification et production de concerts",
            "Méthodologies d'éducation musicale",
            "Plateformes musicales numériques",
            "Droit d'auteur et licences musicales",
          ],
          CV: "files/bernadayoub-cv.pdf",
        },
        Bottom: {
          tiktok: [
            "https://www.tiktok.com/@berna_dayoub",
            `<i class="fa-brands fa-tiktok"></i>`,
          ],
          Whatsapp: [
            "https://wa.me/+96181311749",
            `<i class="fa-brands fa-whatsapp"></i>`,
          ],
          Facebook: [
            "https://www.facebook.com/bernadayoub.violin",
            `<i class="fa-brands fa-facebook"></i>`,
          ],
          Instagram: [
            "https://www.instagram.com/bernadayoub.violin",
            `<i class="fa-brands fa-instagram"></i>`,
          ],
          Youtube: [
            "https://www.youtube.com/bernadayoub",
            `<i class="fa-brands fa-youtube"></i>`,
          ],
        },
      },
      Content: {
        home: {
          banner: {
            title: "Découvrez mon Monde <br />Musical Magique!",
            startStaticPhrae: "&lt;<i>♫</i>&gt; Je joue",
            slidePhrases: `["des mélodies émouvantes.", "des symphonies classiques.", "des rythmes arabes.", "des fusions contemporaines.", "de la musique qui touche le cœur."]`,
            endStaticPhrae: "&lt;/<i>♫</i>&gt;",
            btnText: "Écouter maintenant",
            btnLink: "",
            linkText: "Réserver une performance",
            linkUrl: "https://calendly.com/bernadayoub",
            bgImgPath: "img/bg.jpg",
            imgPath: "img/bg.jpg",
          },
          counters: [
            ["Années de Performance", currentYear - 2014],
            ["Concerts Joués", 120],
            ["Étudiants Formés", 65],
            ["Prix Remportés", 8],
          ],
          services: [
            {
              title: "Performances Live",
              description: `Vivez la magie de la musique de violon live pour vos événements, mariages, fonctions corporatives et occasions spéciales. J'apporte émotion et élégance à chaque performance.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "Enregistrement Musical",
              description: `Services professionnels d'enregistrement de violon pour albums, bandes originales de films, publicités et projets musicaux avec équipement de studio de haute qualité.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "Cours de Violon",
              description: `Instruction de violon personnalisée pour tous les niveaux, des débutants aux joueurs avancés, axée sur la technique, la musicalité et l'expression personnelle.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "Composition Musicale",
              description: `Services de composition et d'arrangement musical personnalisés pour vos projets, mélangeant formation classique et influences contemporaines.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "Travail Orchestral",
              description: `Performance professionnelle de violon orchestral avec expérience dans les orchestres symphoniques, ensembles de chambre et productions de théâtre musical.`,
              linkUrl: "https://wa.me/+96181311749",
            },
            {
              title: "Ateliers & Masterclasses",
              description: `Ateliers éducatifs et masterclasses pour les écoles de musique, universités et institutions culturelles axés sur la technique du violon et l'interprétation musicale.`,
              linkUrl: "https://wa.me/+96181311749",
            },
          ],
          prices: [
            {
              title: "La Corde du Début",
              price: `<span>$</span>20<span> / cours</span>`,
              isPopular: false,
              conditions: [
                ["Introduction aux bases du violon", false],
                ["Découverte de l’instrument et posture correcte", false],
                ["Gammes et exercices simples", false],
                ["Compréhension du rythme musical", false],
                ["Lecture de partitions pour débutants", false],
                ["Conseils pour une pratique efficace", false],
                ["Accès à vie aux vidéos pédagogiques", false],
                ["Certificat de réussite", true],
                ["Évaluation par Berna", true],
                ["Exercices d’échauffement bonus", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "La première étape de votre voyage musical",
            },
            {
              title: "Les Tons de la Fondation",
              price: `<span>$</span>30<span> / cours</span>`,
              isPopular: true,
              conditions: [
                ["Techniques d’archet intermédiaires", false],
                ["Amélioration du placement des doigts", false],
                ["Introduction au vibrato", false],
                ["Interprétation de pièces simples", false],
                ["Fichiers PDF pour la pratique à domicile", false],
                ["Exercices rythmiques de niveau moyen", false],
                ["Jeux en duo ou en groupe", false],
                ["Certificat de réussite", true],
                ["Mises à jour continues", true],
                ["Contact direct par e-mail avec Berna", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "L’étape où votre son commence à prendre forme",
            },
            {
              title: "Le Rythme du Progrès",
              price: `<span>$</span>40<span> / cours</span>`,
              isPopular: false,
              conditions: [
                ["Maîtrise avancée du rythme et de la dynamique", false],
                ["Interprétation de pièces complexes", false],
                ["Élargissement de la gamme expressive", false],
                ["Analyse musicale approfondie", false],
                ["Techniques de performance professionnelle", false],
                ["Conseils d’enregistrement et de partage", false],
                ["Accès à des vidéos bonus", false],
                ["Certificat de réussite", true],
                ["Support prioritaire", true],
                ["Accès aux masterclasses", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "Pour ceux qui visent le niveau professionnel",
            },
            {
              title: "La Voix de l’Expression",
              price: `<span>$</span>50<span> / cours</span>`,
              isPopular: false,
              conditions: [
                ["Contrôle émotionnel dans l’interprétation", false],
                ["Création d’une identité musicale unique", false],
                ["Techniques de scène et d’improvisation", false],
                ["Préparation aux concours et concerts", false],
                ["Développement artistique personnel", false],
                ["Analyse musicale avancée", false],
                ["Approfondissement stylistique", false],
                ["Certificat d’excellence", true],
                ["Session individuelle d’évaluation", true],
                ["Orientation artistique personnalisée", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "Exprimez votre âme à travers le violon",
            },
            {
              title: "Le Théâtre du Violon",
              price: `<span>$</span>60<span> / cours</span>`,
              isPopular: false,
              conditions: [
                ["Accès complet à tous les niveaux", false],
                ["Cours exclusifs et contenu en coulisses", false],
                ["Séances privées en direct avec Berna", false],
                ["Évaluation professionnelle des performances", false],
                ["Opportunités de collaboration musicale", false],
                ["Mises à jour régulières du contenu", false],
                ["Plan de développement personnalisé", false],
                ["Certificat de maîtrise", true],
                ["Mentorat continu", true],
                ["Suivi à vie", true],
              ],
              linkUrl: "https://wa.me/+96181311749",
              note: "L’expérience complète pour devenir un(e) violoniste accompli(e)",
            },
          ],
          recommendations: [
            {
              imgPath: "img/testimonials/director.jpg",
              name: "Leila Khoury",
              description: "Directrice d'Événements - Festival International de Beyrouth",
              text: `Les performances de Berna sont simplement envoûtantes. Sa capacité à mélanger la technique classique avec les rythmes arabes crée une expérience musicale unique qui captive les audiences. Elle a été un point fort de notre festival pendant trois années consécutives.`,
              stars: 5,
            },
            {
              imgPath: "img/testimonials/student.jpg",
              name: "Yara Chamoun",
              description: "Étudiante en Musique",
              text: `Étudier le violon avec Berna a transformé ma compréhension de la musique. Ses méthodes d'enseignement sont innovantes tout en étant ancrées dans une technique solide. Elle inspire ses étudiants à trouver leur propre voix musicale tout en maintenant l'excellence technique.`,
              stars: 5,
            },
            {
              imgPath: "img/testimonials/producer.jpg",
              name: "Samir Fares",
              description: "Producteur de Musique",
              text: `Travailler avec Berna en studio est le rêve d'un producteur. Sa précision, sa musicalité et son professionnalisme rendent chaque session productive et inspirante. Elle apporte profondeur et émotion à chaque note qu'elle joue.`,
              stars: 5,
            },
          ],
        },
        gallery: {
          filter_nav: [
            ["*", "Toutes les Performances"],
            [".live", "Concerts Live"],
            [".studio", "Enregistrements Studio"],
            [".teaching", "Enseignement"],
          ],
          filter_list: [
            {
              type: "studio",
              imgPath: "img/gallery/studio-1.png",
              title: "Experience",
              description: "",
              templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7185940330875768066?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
              hBG: [true, "#000"],
            },
            {
              type: "studio",
              imgPath: "img/gallery/studio-2.png",
              title: "Memories",
              description: "",
              templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7503671273952709895?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
              hBG: [true, "#000"],
            },
            {
              type: "studio",
              imgPath: "img/gallery/studio-3.png",
              title: "",
              description: "",
              templateUrl: "https://www.tiktok.com/@berna_dayoub/video/7488438898335436040?is_from_webapp=1&sender_device=pc&web_id=7555521971325928972",
              hBG: [true, "#000"],
            },
          ],
        },
        history: [
          {
            title: "Éducation",
            data: [
              {
                box: "diplome",
                type: "Master",
                src: "Conservatoire National Libanais",
                title: "Performance de Violon",
                date: "2018",
                description: "Master de Musique en Performance de Violon avec mention",
                linkPath: "files/conservatory-diploma.jpg",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "Licence",
                src: "Institut Supérieur de Musique, Damas",
                title: "Performance Musicale",
                date: "2015",
                description: "Licence en Arts en Performance Musicale, Majeure en Violon",
                linkPath: "files/bachelor-diploma.jpg",
                havePopup: false,
                popup: null,
              },
            ],
          },
          {
            title: "Histoire des Performances",
            data: [
              {
                box: "recommendation",
                type: "Soliste",
                src: "Festival International de Beyrouth",
                title: "Artiste Invitée",
                date: "2021-2024",
                description: `Soliste invitée annuelle au principal festival de musique du Liban, performant devant des audiences de 3 000+ personnes`,
                linkPath: "https://beirutfestival.org",
                havePopup: false,
                popup: {},
              },
            ],
          },
        ],
        contact: [
          {
            id: 1,
            data: [
              ["Pays:", "Liban", "l"],
              ["Ville:", "Beyrouth", "l"],
              ["Studio:", "Quartier Musical, Rue Hamra", "l"],
            ],
          },
          {
            id: 2,
            data: [
              ["Email:", "me@berna-violin.art", "e"],
              ["Whatsapp:", "+96181311749", "w"],
              ["Studio:", "+96113876543", "p"],
            ],
          },
        ],
      },
      Brand: ["img/brands/violin-1.png", "img/brands/music-2.png"],
      Copyright: ["https://wa.me/+96181311749", "Berna Dayoub"],
      Menu: ["Accueil", "Galerie", "Carrière", "Contact"],
      Language: [
        ["EN", false, "en"],
        ["AR", false, "ar"],
        ["FR", true, "fr"],
      ],
      Preloader: {
        id: "preloader",
        Name: "Berna Dayoub",
        JobTitle: "Violoniste Professionnelle",
      },
    };
  //* Person Data :
  var portfolio;
  const portfolio_lang = localStorage.getItem("aq-apps-language");
  if (portfolio_lang == "ar") {
    portfolio = portfolio_ar;
  } else if (portfolio_lang == "fr") {
    portfolio = portfolio_fr;
  } else {
    portfolio = portfolio_en;
  }
  var portfolio_data_scroll_about = document.getElementById(
    "portfolio-data-scroll-about"
  ),
    portfolio_data_scroll_languages = document.getElementById(
      "portfolio-data-scroll-languages"
    ),
    portfolio_data_scroll_skills = document.getElementById(
      "portfolio-data-scroll-skills"
    ),
    portfolio_data_scroll_knowledge = document.getElementById(
      "portfolio-data-scroll-knowledge"
    ),
    portfolio_data_bottom = document.getElementById("portfolio-data-bottom"),
    portfolio_content_home_counters = document.getElementById(
      "portfolio-content-home-counters"
    ),
    portfolio_content_home_services = document.getElementById(
      "portfolio-content-home-services"
    ),
    portfolio_content_home_price = document.getElementById(
      "portfolio-content-home-price"
    ),
    portfolio_content_home_recommendations = document.getElementById(
      "portfolio-Content-home-recommendations"
    ),
    portfolio_content_gallery_filter_nav = document.getElementById(
      "portfolio-content-gallery-filter-nav"
    ),
    portfolio_content_gallery_filter_list = document.getElementById(
      "portfolio-content-gallery-filter-list"
    ),
    portfolio_content_history = document.getElementById(
      "portfolio-content-history"
    ),
    portfolio_content_contact = document.getElementById(
      "portfolio-content-contact"
    ),
    portfolio_brands = document.getElementById("portfolio-brands"),
    portfolio_menu = document.getElementById("portfolio-menu"),
    portfolio_language = document.getElementById("portfolio-language");
  // * Response Actions :
  $("#portfolio-data-top").html(`
                  <div class="art-avatar">
                    <a
                      data-fancybox="avatar"
                      href="${portfolio.Data.Top.Avatar}"
                      class="art-avatar-curtain">
                      <img src="${portfolio.Data.Top.Avatar}" alt="avatar" />
                      <i class="fas fa-expand"></i>
                    </a>
                    <div class="art-lamp-light">
                      <div class="art-available-lamp"></div>
                    </div>
                  </div>
                  <h5 class="art-name mb-10">
                    <a href="${portfolio.Data.Bottom.Whatsapp[0]}" target="_blank">${portfolio.Data.Top.Name}</a>
                  </h5>
                  <div class="art-sm-text">
                    ${portfolio.Data.Top.Post}
                  </div>
  `);
  jQuery.each(portfolio.Data.Scroll.About, (index, item) => {
    portfolio_data_scroll_about.innerHTML += `
    <li>
      <h6>${item[0]}</h6>
      <span>${item[1]}</span>
    </li>
    `;
  });
  jQuery.each(portfolio.Data.Scroll.Languages, (index, item) => {
    portfolio_data_scroll_languages.innerHTML += `
    <div class="art-lang-skills-item">
      <div id="${item.Id}" class="art-cirkle-progress ${item.Progress} ${item.Type}"></div>
      <h6>${item.Name}</h6>
    </div>
    `;
  });
  jQuery.each(portfolio.Data.Scroll.Skills, (index, item) => {
    portfolio_data_scroll_skills.innerHTML += `
    <div>
      <h6>
        <hr />
        ${item.Title}
        <hr />
      </h6>
    </div>
    `;
    jQuery.each(item.items, (index, skill) => {
      portfolio_data_scroll_skills.innerHTML += `
        <div class="art-hard-skills-item">
          <div class="art-skill-heading">
            <h6>${skill.Name}</h6>
          </div>
          <div class="art-line-progress">
            <div id="${skill.id}" class="${skill.Type + " " + skill.Progress
        }"></div>
          </div>
        </div>      
      `;
    });
  });
  jQuery.each(portfolio.Data.Scroll.Knowledges, (index, item) => {
    portfolio_data_scroll_knowledge.innerHTML += `<li>${item}</li>`;
  });
  $("#portfolio-data-scroll-CV").attr("href", portfolio.Data.Scroll.CV);
  jQuery.each(portfolio.Data.Bottom, (index, item) => {
    portfolio_data_bottom.innerHTML += `
    <a
    href="${item[0]}"
    target="_blank"
    >${item[1]}</a>
    `;
  });
  $("#portfolio-copyright").html(
    `<div>© ${currentYear} <a href="${portfolio.Copyright[0]}" target="_blank" >${portfolio.Copyright[1]}</a></div>`
  );
  $("#portfolio-preloader").html(`
          <h4>${portfolio.Preloader.Name}</h4>
          <p class="m-1">${portfolio.Preloader.JobTitle}</p>
          <div id="${portfolio.Preloader.id}" class="art-preloader-load"></div>
  `);
  jQuery.each(portfolio.Menu, (index, item) => {
    portfolio_menu.innerHTML += `
  <li class="menu-item route ${index == 0 ? "current-menu-item" : ""} ">
    <a>${item}</a>
  </li>
  `;
  });
  $(".route").on("click", function () {
    var i = $(this).index();
    $(".route-content").each((i, k) => {
      $(".route-content")[i].classList.add("d-none");
    });
    $(".route-content")[i].classList.remove("d-none");
    $(".route.current-menu-item").removeClass("current-menu-item");
    $(".route")[i].classList.add("current-menu-item");
    $(".art-current-page").text(portfolio.Menu[i]);
  });
  $("#portfolio-content-home-banner").html(`
  <div class="row p-60-0 p-lg-30-0 p-md-15-0">
    <div class="col-lg-12">
      <div
        class="art-a art-banner"
        style="background-image: url(${portfolio.Content.home.banner.bgImgPath})"
      >
        <div class="art-banner-back"></div>
        <div class="art-banner-dec"></div>
        <div class="art-banner-overlay">
          <div class="art-banner-title">
            <h1 class="mb-15">
            ${portfolio.Content.home.banner.title}
            </h1>
            <div class="art-lg-text art-code mb-25">
            ${portfolio.Content.home.banner.startStaticPhrae}
              <span
                class="txt-rotate"
                data-period="2000"
                data-rotate='${portfolio.Content.home.banner.slidePhrases}'
              ></span
              >${portfolio.Content.home.banner.endStaticPhrae}
            </div>
            <div class="art-buttons-frame">
              <!-- button -->
              <a
                id="exploreBtn"
                class="art-btn art-btn-md"
                style="color: #20202a; cursor: pointer;"
                ><span>${portfolio.Content.home.banner.btnText}</span></a
              >
              <a
                href="${portfolio.Content.home.banner.linkUrl}"
                class="art-link art-white-link art-w-chevron"
                target="_blank"
                >${portfolio.Content.home.banner.linkText}</a
              >
            </div>
          </div>
          <img
            src="img/face-2.png"
            class="art-banner-photo"
            alt="Berna Dayoub"
          />
        </div>
      </div>
    </div>
  </div>`);
  $("#exploreBtn").on("click", () => {
    $(".route-content").each((i, k) => {
      $(".route-content")[i].classList.add("d-none");
    });
    $(".route-content")[1].classList.remove("d-none");
    $(".route.current-menu-item").removeClass("current-menu-item");
    $(".route")[1].classList.add("current-menu-item");
    $(".art-current-page").text(portfolio.Menu[1]);
  });
  jQuery.each(portfolio.Content.home.counters, (index, item) => {
    portfolio_content_home_counters.innerHTML += `
    <div class="col-md-3 col-6">
      <div class="art-counter-frame">
        <div class="art-counter-box">
          <span class="art-counter">${item[1]}</span
          ><span class="art-counter-plus">+</span>
        </div>
        <h6>${item[0]}</h6>
      </div>
    </div>
    `;
  });
  jQuery.each(portfolio.Content.home.services, (index, item) => {
    portfolio_content_home_services.innerHTML += `
    <div class="col-lg-4 col-md-6">
      <div class="art-a art-service-icon-box">
        <div class="art-service-ib-content">
          <h5 class="mb-15">${item.title}</h5>
          <div class="mb-15">
          ${item.description}
          </div>
          <div class="art-buttons-frame">
            <a
              href="${item.linkUrl}"
              class="art-link art-color-link art-w-chevron"
              >Order now</a
            >
          </div>
        </div>
      </div>
    </div>
    `;
  });
  jQuery.each(portfolio.Content.home.prices, (index, item) => {
    console.log(item.note != null);

    portfolio_content_home_price.innerHTML += `
        <div class="col-lg-4">
        <div class="art-a art-price ${item.isPopular == true ? "art-popular-price" : ""
      }">
          <div class="art-price-body">
            <h5 class="mb-30">${item.title}</h5>
            <div class="art-price-cost">
              <div class="art-number">${item.price}</div>
            </div>
            <ul class="price-list art-price-list">
            </ul>
            <a
              href="${item.linkUrl}"
              class="art-link art-color-link art-w-chevron"
              >Order now</a
            >
            ${item.note != null
        ? `<div class="art-asterisk">
            <sup>*</sup>${item.note}
          </div>`
        : `<div class="art-asterisk">
            <sup>*</sup>Free only when ordering paid services
          </div>`
      }
          </div>
        </div>
      </div>
    `;
    let list = document.querySelectorAll(".price-list");
    jQuery.each(item.conditions, (i, c) => {
      list[index].innerHTML += `<li class="${c[1] == true ? "art-empty-item" : ""
        }">${c[0]}</li>`;
    });
  });
  jQuery.each(portfolio.Brand, (index, item) => {
    portfolio_brands.innerHTML += `
    <div class="col-6 col-lg-3">
                      <img
                        class="art-brand"
                        src="${item}"
                        alt="brand"
                      />
                    </div>`;
  });
  jQuery.each(portfolio.Content.home.recommendations, (index, item) => {
    portfolio_content_home_recommendations.innerHTML += `
    <div class="swiper-slide">
      <div class="art-a art-testimonial">
        <div class="testimonial-body">
          <img
            class="art-testimonial-face"
            src="${item.imgPath}"
            alt="face"
          />
          <h5>${item.name}</h5>
          <div class="art-el-suptitle mb-15">
          ${item.description}
          </div>
          <div class="mb-15">
          ${item.text}
          </div>
        </div>
        <div class="art-testimonial-footer">
          <div class="art-left-side">
            <ul class="rate-list art-star-rate"></ul>
          </div>
          <div class="art-right-side"></div>
        </div>
      </div>
    </div>
  `;
    var rate_list = document.querySelectorAll(".rate-list");
    for (var i = 0; i < item.stars; i++) {
      rate_list[index].innerHTML += `<li><i class="fas fa-star"></i></li>`;
    }
    for (var i = 0; i < 5 - item.stars; i++) {
      rate_list[
        index
      ].innerHTML += `<li class="art-empty-item"><i class="fas fa-star"></i></li>`;
    }
  });
  jQuery.each(portfolio.Content.gallery.filter_nav, (index, item) => {
    portfolio_content_gallery_filter_nav.innerHTML += `
    <a
      ${index == 0 ? `id="gallery-click-btn"` : ""}
      data-filter="${item[0]}"
      class="art-link ${index == 0 ? "art-current" : ""}"
      style="cursor:pointer;"
      >${item[1]}</a>
    `;
  });
  jQuery.each(portfolio.Content.gallery.filter_list, (index, item) => {
    portfolio_content_gallery_filter_list.innerHTML += `
      <div class="art-grid-item ${item.type}">
        <a
          data-fancybox="gallery"
          href="${item.imgPath}"
          class="art-a art-portfolio-item-frame art-horizontal"
        >
          <img src="${item.imgPath}" style="background-color: ${item.hBG[0] == true ? item.hBG[1] : "transparent"}" alt="item" />
          <span class="art-item-hover"
            ><i class="fas fa-expand"></i
          ></span>
        </a>
        
        <div class="art-item-description">
          <h5 class="mb-15">${item.title}</h5>
          <p>${item.description}</p>
          <a
            href="${item.templateUrl}"
            class="art-link art-color-link art-w-chevron"
            target="_blank"
            >Live View</a
          >
        </div>
      </div>
    `;
  });
  jQuery.each(portfolio.Content.history, (index, item) => {
    portfolio_content_history.innerHTML += `
    <div class="col-lg-6">
      <div class="art-section-title">
        <div class="art-title-frame">
          <h4>${item.title}</h4>
        </div>
      </div>
      <div class="art-timeline art-gallery history-timeline-portfolio"></div>
    </div>
    `;
    var time_line = document.querySelectorAll(".history-timeline-portfolio");
    jQuery.each(item.data, (i, d) => {
      var id = index + 1;
      time_line[index].innerHTML += `
      <div class="art-timeline-item">
      <div class="art-timeline-mark-light"></div>
      <div class="art-timeline-mark"></div>
      <div class="art-a art-timeline-content">
        <div class="art-card-header">
          <div class="art-left-side">
            <h5>${d.src}</h5>
            <div class="art-el-suptitle mb-15">
              ${d.title}
            </div>
          </div>
          <div class="art-right-side">
            <span class="art-date"
              >${d.date}</span
            >
          </div>
        </div>
        <p>
        ${d.description}
        </p>
        <a
          data-fancybox="${d.box}"
          href="${d.havePopup == true ? "#art-recomendation-popup-" + id : d.linkPath
        }"
          class="art-link art-color-link art-w-chevron"
          >${d.type}</a
        >
      </div>
      ${d.havePopup == true
          ? `
      <!-- popup -->
      <div
        class="art-recomendation-popup"
        style="display: none"
        id="art-recomendation-popup-${id}"
      >
        <div class="art-a art-testimonial">
          <div class="testimonial-body">
            <img
              class="art-testimonial-face"
              src="${d.popup.imgPath}"
              alt="face"
            />
            <h5>${d.popup.name}</h5>
            <div class="art-el-suptitle mb-15">
            ${d.popup.title}
            </div>
            <div class="mb-15">
            ${d.popup.description}
            </div>
          </div>
          <!-- testimonial footer -->
          <div class="art-testimonial-footer">
            <div class="art-left-side">
              <!-- star rate -->
              <ul class="art-star-rate">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <!-- star rate end -->
            </div>
            <div class="art-right-side"></div>
          </div>
          <!-- testimonial footer end -->
        </div>
        <!-- testimonial end -->
      </div>
    </div>
      `
          : ""
        }
      `;
    });
  });
  jQuery.each(portfolio.Content.contact, (index, item) => {
    var count = portfolio.Content.contact.length,
      x = $("#portfolio-content-contact").parent().width(),
      fullWidth = (x * 80) / 100,
      width = fullWidth / count + "px";
    portfolio_content_contact.innerHTML += `
    <div class="art-a art-card" style="width:${width}; min-width: 280px !important;">
    <div class="art-table p-15-15">
      <ul class="contact-list"></ul>
    </div>
  </div>`;
    var contact_list = document.querySelectorAll(".contact-list");
    jQuery.each(item.data, (i, cd) => {
      var type;
      if (cd[2] == "m") {
        type = "mailto:" + cd[1];
      } else if (cd[2] == "w") {
        type = "https://wa.me/" + cd[1];
      } else if (cd[2] == "p") {
        type = "tel:" + cd[1];
      }
      if (cd[2] == "l") {
        contact_list[index].innerHTML += `
    <li style="cursor:pointer;">
          <h6>${cd[0]}</h6>
          <span
            > <a>${cd[1]}</a></span
          >
        </li>
    `;
      } else {
        contact_list[index].innerHTML += `
    <li style="cursor:pointer;">
          <h6>${cd[0]}</h6>
          <span
            ><a href="${type}"
              >${cd[1]}</a
            ></span
          >
        </li>
    `;
      }
    });
  });
  jQuery.each(portfolio.Language, (index, item) => {
    portfolio_language.innerHTML += `<li class="${item[2]} ${item[1] == true ? `art-active-lang"` : "lang-btn"
      }" style="cursor: pointer;"><a>${item[0]}</a></li>`;
  });
  var lang_btn = document.querySelectorAll(".lang-btn");
  jQuery.each(lang_btn, (index, item) => {
    item.addEventListener("click", () => {
      localStorage.removeItem("aq-apps-language");
      console.log(item.classList[0]);
      localStorage.setItem("aq-apps-language", item.classList[0]);
      location.reload();
    });
  });
  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector("#scrollbar"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector("#scrollbar2"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  // page loading
  $(document).ready(function () {
    anime({
      targets: ".art-preloader .art-preloader-content",
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: "linear",
      complete: function (anim) { },
    });
    anime({
      targets: ".art-preloader",
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: "linear",
      complete: function (anim) {
        $(".art-preloader").css("display", "none");
      },
    });
    $(".route-content").addClass("d-none");
    $(".route-content").first().removeClass("d-none");
  });
  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: "easeInOut",
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });
  bar.animate(1);
  // counters
  anime({
    targets: ".art-counter-frame",
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: "linear",
  });
  anime({
    targets: ".art-counter",
    delay: 1300,
    opacity: [1, 1],
    complete: function (anim) {
      $(".art-counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "linear",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    },
  });
  // progressbars
  var CircleBar = document.querySelectorAll(".Circle");
  jQuery.each(CircleBar, (index, item) => {
    var prog = item.classList[1].match(/\d+/)[0] / 100,
      bar = new ProgressBar.Circle(item, {
        strokeWidth: 7,
        easing: "easeInOut",
        duration: 1400,
        delay: 2500,
        trailWidth: 7,
        step: function (state, circle) {
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value);
          }
        },
      });
    bar.animate(prog);
  });
  var LineBar = document.querySelectorAll(".line");
  jQuery.each(LineBar, (index, item) => {
    var prog = item.classList[1] / 100,
      bar = new ProgressBar.Line(item, {
        strokeWidth: 1.72,
        easing: "easeInOut",
        duration: 1400,
        delay: 2800,
        trailWidth: 1.72,
        svgStyle: {
          width: "100%",
          height: "100%",
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100) + " %");
        },
      });
    bar.animate(prog);
  });
  // Contact form
  $(".art-input").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("art-active");
    } else {
      $(this).removeClass("art-active");
    }
  });
  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      var tl = anime.timeline({
        easing: "easeOutExpo",
      });

      tl.add({
        targets: ".art-submit",
        opacity: 0,
        scale: 0.5,
      }).add({
        targets: ".art-success",
        scale: 1,
        height: "45px",
      });
    });
    return false;
  });
  // portfolio filter
  $(".art-filter a").on("click", function () {
    $(".art-filter .art-current").removeClass("art-current");
    $(this).addClass("art-current");
    var selector = $(this).data("filter");
    $(".art-grid").isotope({
      filter: selector,
    });
    return false;
  });
  // masonry Grid
  $(".art-grid").isotope({
    filter: "*",
    itemSelector: ".art-grid-item",
    transitionDuration: ".6s",
  });
  // slider testimonials
  var swiper = new Swiper(".art-testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-testi-swiper-next",
      prevEl: ".art-testi-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });
  // slider works
  var swiper = new Swiper(".art-works-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-works-swiper-next",
      prevEl: ".art-works-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });
  // slider blog
  var swiper = new Swiper(".art-blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-blog-swiper-next",
      prevEl: ".art-blog-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });
  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "share", "slideShow", "thumbs", "close"],
  });
  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });
  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "close"],
  });
  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });
  $.fancybox.defaults.hash = false;
  $(".current-menu-item a").clone().appendTo(".art-current-page");
  $(".art-map-overlay").on("click", function () {
    $(this).addClass("art-active");
  });
  $(".art-info-bar-btn").on("click", function () {
    $(".art-info-bar").toggleClass("art-active");
    $(".art-menu-bar-btn").toggleClass("art-disabled");
  });
  $(".art-menu-bar-btn").on("click", function () {
    $(".art-menu-bar-btn , .art-menu-bar").toggleClass("art-active");
    $(".art-info-bar-btn").toggleClass("art-disabled");
  });
  $(".art-info-bar-btn , .art-menu-bar-btn").on("click", function () {
    $(".art-content").toggleClass("art-active");
  });
  $(".art-curtain , .art-mobile-top-bar").on("click", function () {
    $(
      ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
    ).removeClass("art-active , art-disabled");
  });
  $(".menu-item").on("click", function () {
    if ($(this).hasClass("menu-item-has-children")) {
      $(this).children(".sub-menu").toggleClass("art-active");
    } else {
      $(
        ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
      ).removeClass("art-active , art-disabled");
    }
  });
  // reinit
  // document.addEventListener("swup:contentReplaced", function () {
  //   Scrollbar.use(OverscrollPlugin);
  //   Scrollbar.init(document.querySelector("#scrollbar"), {
  //     damping: 0.05,
  //     renderByPixel: true,
  //     continuousScrolling: true,
  //   });
  //   Scrollbar.init(document.querySelector("#scrollbar2"), {
  //     damping: 0.05,
  //     renderByPixel: true,
  //     continuousScrolling: true,
  //   });

  //   $("#form").submit(function () {
  //     $.ajax({
  //       type: "POST",
  //       url: "mail.php",
  //       data: $(this).serialize(),
  //     }).done(function () {
  //       var tl = anime.timeline({
  //         easing: "easeOutExpo",
  //       });

  //       tl.add({
  //         targets: ".art-submit",
  //         opacity: 0,
  //         scale: 0.5,
  //       }).add({
  //         targets: ".art-success",
  //         scale: 1,
  //         height: "45px",
  //       });
  //     });
  //     return false;
  //   });

  //   // Masonry Grid
  //   $(".art-grid").isotope({
  //     filter: "*",
  //     itemSelector: ".art-grid-item",
  //     transitionDuration: ".6s",
  //   });

  //   $(".art-filter a").on("click", function () {
  //     $(".art-filter .art-current").removeClass("art-current");
  //     $(this).addClass("art-current");

  //     var selector = $(this).data("filter");
  //     $(".art-grid").isotope({
  //       filter: selector,
  //     });
  //     return false;
  //   });

  //   anime({
  //     targets: ".art-counter-frame",
  //     opacity: [0, 1],
  //     duration: 800,
  //     delay: 300,
  //     easing: "linear",
  //   });

  //   $(".art-counter").each(function () {
  //     $(this)
  //       .prop("Counter", 0)
  //       .animate(
  //         {
  //           Counter: $(this).text(),
  //         },
  //         {
  //           duration: 2000,
  //           easing: "linear",
  //           step: function (now) {
  //             $(this).text(Math.ceil(now));
  //           },
  //         }
  //       );
  //   });

  //   // slider testimonials
  //   var swiper = new Swiper(".art-testimonial-slider", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: false,
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".art-testi-swiper-next",
  //       prevEl: ".art-testi-swiper-prev",
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 2,
  //       },
  //       1200: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 2,
  //       },
  //       768: {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });

  //   // slider works
  //   var swiper = new Swiper(".art-works-slider", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: {
  //       delay: 4000,
  //     },
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".art-works-swiper-next",
  //       prevEl: ".art-works-swiper-prev",
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 2,
  //       },
  //       1200: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });

  //   // slider blog
  //   var swiper = new Swiper(".art-blog-slider", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: {
  //       delay: 4000,
  //     },
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".art-blog-swiper-next",
  //       prevEl: ".art-blog-swiper-prev",
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 3,
  //       },
  //       1200: {
  //         slidesPerView: 3,
  //       },
  //       992: {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });

  //   $('[data-fancybox="gallery"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: ["zoom", "slideShow", "thumbs", "close"],
  //   });

  //   $('[data-fancybox="diplome"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: ["zoom", "slideShow", "thumbs", "close"],
  //   });

  //   $('[data-fancybox="recommendation"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: ["zoom", "slideShow", "thumbs", "close"],
  //   });

  //   $.fancybox.defaults.hash = false;

  //   $(".current-menu-item a").clone().prependTo(".art-current-page");

  //   $(".menu-item").on("click", function () {
  //     if ($(this).hasClass("menu-item-has-children")) {
  //       $(this).children(".sub-menu").toggleClass("art-active");
  //     } else {
  //       $(
  //         ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
  //       ).removeClass("art-active , art-disabled");
  //     }
  //   });
  // });
});
