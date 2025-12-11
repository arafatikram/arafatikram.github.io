// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-thrilled-to-share-that-one-of-our-research-papers-entitled-as-techno-economic-optimization-of-grid-integrated-hybrid-storage-system-using-ga-has-been-awarded-as-best-paper-of-ieee-ihcsp-2023",
          title: 'I am thrilled to share that one of our research papers entitled as...',
          description: "",
          section: "News",},{id: "news-excited-to-share-our-findings-at-sti2023",
          title: 'Excited to share our findings at STI2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-excited-to-present-at-the-2023-ieee-9th-wiecon-ece",
          title: 'Excited to present at the 2023 IEEE 9th WIECON-ECE',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-during-my-time-as-a-graduate-teaching-assistant-i-had-the-chance-to-collaborate-with-a-professor-on-optimizing-energy-consumption-in-smart-homes-we-focused-on-load-scheduling-approaches-to-enhance-efficiency-and-reduce-costs-our-work-guided-by-dr-asim-ullah-fundded-by-fse-dept-of-eee-iiuc-was-published-in-iet-power-electronics-2024-this-experience-was-incredibly-enriching-and-deepened-my-understanding-of-smart-home-technologies-download-pdf",
          title: 'During my time as a graduate teaching assistant, I had the chance to...',
          description: "",
          section: "News",},{id: "news-thrilled-to-announce-our-new-publication-in-the-arabian-journal-for-science-and-engineering-ajse-a-reputable-journal-our-article-techno-economic-assessment-and-environmental-impact-analysis-of-hybrid-storage-system-integrated-microgrid-stems-from-my-bachelor-thesis-we-explored-the-impact-of-integrating-hydrogen-energy-with-hybrid-distributed-generation-optimizing-costs-and-reducing-greenhouse-emissions-using-the-carbon-taxation-law-in-two-cities-download-pdf",
          title: 'Thrilled to announce our new publication in the Arabian Journal for Science and...',
          description: "",
          section: "News",},{id: "news-excited-to-share-insights-on-oral-presentaion-on-icaccess2024",
          title: 'Excited to share insights on Oral Presentaion on iCACCESS2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-top-10-best-student-paper-award",
          title: 'Top-10 Best Student Paper Award!!! ⚡',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-i-am-thrilled-to-share-that-one-of-our-research-papers-entitled-cost-effective-optimal-integration-of-renewable-energy-and-waste-to-energy-technologies-is-now-available-online-as-an-open-access-publication-while-working-as-a-research-assistant-under-the-supervision-of-dr-md-shafiullah-we-conducted-a-case-study-on-waste-to-energy-generation-systems-integrated-with-renewable-energy-sources-focusing-on-annual-cost-risk-factors-economic-life-cycle-assessment-and-environmental-impact-analysis-resulting-in-8-cost-reduction-read-online-download-pdf",
          title: 'I am thrilled to share that one of our research papers, entitled “Cost-Effective...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
