const { createApp, ref, computed, watch, onMounted, onUnmounted, reactive } = Vue;

// Sample Data Structure
// Added callForPapers, links array, abstract, and bibtex fields based on feedback.
const workshopData = reactive({
    "2026": {
        location: "Piri Reis Üniversitesi, İstanbul, Türkiye",
        dates: "7-10 Temmuz, 2026",
        callForPapers: "Hesaplamalı sosyal bilimler; dijital dünyamızda ardımızda bıraktığımız dijital ekmek kırıklarının insan doğasını şimdiye kadar daha önce hiç olmadığı kadar, büyük ölçekte, hassasiyette ölçümlenmesiyle ortaya çıkmıştır. Bu yeni dal disiplinler arası bir alan olup hem bilgisayar bilimlerini, hem de sosyal bilimleri kapsamaktadır. Sosyal bilimlerin konusu olan problemlerin, bilgisayar bilimlerinde kullanılan makina öğrenmesi, yapay zeka, karışık ağ analizleri gibi tekniklerin büyük veri setleri üzerinde uygulanılması ile ortaya çıkan bir alandır. \n Bu oturumun amacı hızla büyüyen hesaplamalı sosyal bilimler alanındaki yaklaşımları, teknolojileri ve bilimsel araştırmaları paylaşmaktır. Özel oturumumuz, bunlarla sınırlı olmamakla birlikte, öncelikli olarak aşağıdaki konularda yapılan çalışmalara yer verilecektir. Bu alanda kullanılan büyük veri kaynakları ve bu kaynaklar kullanılarak yapılan sosyal içerikli çalışmalar: örneğin cep telefonu kullanım verisi ile bölgesel sosyo-ekonomik tahminleme, sosyal medya paylaşımlarından nefret söylemlerinin anlaşılması, toplum hareketliliğinin toplu taşıma verileri ile ölçümlenip Kovid istatistikleri ile karşılaştırılması ya da büyük dil modellerinin sosyal medyadaki konuşulan konuların anlamsal değişimi gibi örnekler olabilir. Bunun dışında, yapay zeka uygulamalarında etik ve veri güvenliği konularında yapılan çalışmalara da oturumumuzda yer vermek istemekteyiz.",
        committee: ["Dr. Onur Varol", "Dr. Didem Gündoğdu"],
        papers: [],
        gallery: []
    },
    "2025": {
        location: "Işık Üniversitesi, İstanbul, Türkiye",
        dates: "25-28 Haziran, 2025",
        callForPapers: "Hesaplamalı sosyal bilimler; dijital dünyamızda ardımızda bıraktığımız dijital ekmek kırıklarının insan doğasını şimdiye kadar daha önce hiç olmadığı kadar, büyük ölçekte, hassasiyette ölçümlenmesiyle ortaya çıkmıştır. Bu yeni dal disiplinler arası bir alan olup hem bilgisayar bilimlerini, hem de sosyal bilimleri kapsamaktadır. Sosyal bilimlerin konusu olan problemlerin, bilgisayar bilimlerinde kullanılan makina öğrenmesi, yapay zeka, karışık ağ analizleri gibi tekniklerin büyük veri setleri üzerinde uygulanılması ile ortaya çıkan bir alandır. <br> Bu oturumun amacı hızla büyüyen hesaplamalı sosyal bilimler alanındaki yaklaşımları, teknolojileri ve bilimsel araştırmaları paylaşmaktır. Özel oturumumuz, bunlarla sınırlı olmamakla birlikte, öncelikli olarak aşağıdaki konularda yapılan çalışmalara yer verilecektir. Bu alanda kullanılan büyük veri kaynakları ve bu kaynaklar kullanılarak yapılan sosyal içerikli çalışmalar: örneğin cep telefonu kullanım verisi ile bölgesel sosyo-ekonomik tahminleme, sosyal medya paylaşımlarından nefret söylemlerinin anlaşılması, toplum hareketliliğinin toplu taşıma verileri ile ölçümlenip Kovid istatistikleri ile karşılaştırılması ya da büyük dil modellerinin sosyal medyadaki konuşulan konuların anlamsal değişimi gibi örnekler olabilir. Bunun dışında, yapay zeka uygulamalarında etik ve veri güvenliği konularında yapılan çalışmalara da oturumumuzda yer vermek istemekteyiz.",
        committee: ["Dr. Onur Varol", "Dr. Didem Gündoğdu"],
        papers: [
            {
                title: "Prediction of internal migration after an earthquake with call detail records",
                authors: "Erdem Şahin; Yusuf Sezer Car; Arda Astam; Didem Gündoğdu",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU66497.2025.11112312", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "The 2023 Kahramanmaraş Earthquake resulted in over 55,000 deaths. Efficient evacuation management can significantly reduce secondary casualties and optimize resource allocation. This study explores the application of Call Detail Records (CDR) in times of crisis, with a particular focus on the consequences of earthquakes. We focus on two issues: the post-earthquake evacuation behavior and prediction of population movements after earthquakes. We use machine learning models with distance-normalized features inspired by the Gravity model to predict population movements immediately after earthquake. The experiments show that our model can predict evacuation flows between different districts. Our main findings are that population distribution and earthquake intensity are the primary factors of evacuation patterns. Comparative analysis between Turkish and Syrian populations shows the same feature importance rankings, but distinct pattern distributions.",
                bibtex: "@INPROCEEDINGS{11111955,\n    author={Hu, Jingkang and Aydoğdu, Bilgeçağ and Güneş, Subhi and Yağcıklı, Semiha Nur and Salah, Albert Ali},\n    booktitle={2025 33rd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Prediction of internal migration after an earthquake with call detail records}, \n    year={2025},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Ethics;Law;Earthquakes;SIM card;Machine learning;Predictive models;Signal processing;Systems engineering and theory;Telecommunications;Guidelines;Mobile data;post-earthquake mobility;machine learning},\n    doi={10.1109/SIU66497.2025.11111955}}"
            },
            {
                title: "Digital Thorns: The Rise of Sarcasm as Political Protest in Türkiye",
                authors: "Jingkang Hu; Bilgeçağ Aydoğdu; Subhi Güneş; Semiha Nur Yağcıklı; Albert Ali Salah",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU66497.2025.11111955", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Sarcasm, by revealing unforeseen linguistic and societal interactions in online platforms dominated by political debates, presents a critical area of study for natural language processing models. The intensification of sarcasm in digital discourse has become a subject of interest, as increasing censorship and authoritarian tendencies have amplified the need for encoding dissident thought. The most significant finding of this study is that the high consistency rates achieved by a BERTurk model on the Ekşi Sözlük dataset demonstrate sarcasm’s potential as a real-time indicator of societal discontent and political tension. The model revealed a stark asymmetry in sarcastic content: entries targeting Recep Tayyip Erdoğan (ruling party leader) exhibited a higher sarcasm rate (28.1%), while those directed at Kemal Kılıçdaroğlu (opposition leader) remained significantly lower (9.2%), concretizing the power imbalance between the ruling party and opposition in Türkiye’s political landscape. Furthermore, the surge in sarcastic expressions during critical periods, such as economic crises and coup attempts, confirms that this rhetoric functions as a collective response mechanism. The results suggest that sarcasm in digital platforms could serve as an early warning signal for public sentiment under conditions of democratic decline. Future studies across diverse countries and larger datasets could deepen our understanding of this linguistic strategy’s role in political discourse, offering new insights into sociopolitical psychology.",
                bibtex: "@INPROCEEDINGS{11112312,\n    author={Şahin, Erdem and Car, Yusuf Sezer and Astam, Arda and Gündoğdu, Didem},\n    booktitle={2025 33rd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Digital Thorns: The Rise of Sarcasm as Political Protest in Türkiye}, \n    year={2025},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Economics;Biological system modeling;Psychology;Linguistics;Signal processing;Natural language processing;Rhetoric;Real-time systems;Encoding;Surges;sarcasm;political discourse;hybrid regimes;BERTurk;Ekşi Sözlük;natural language processing},\n    doi={10.1109/SIU66497.2025.11112312}}"
            },
            {
                title: "Modelling Columnists with Large Language Models",
                authors: "Görkem Afşin; Baturalp Arslan Kabadayı; Eren Özdil; Kamer Kaya; Onur Varol",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU66497.2025.11112306", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Large language models not only provide engineering solutions but also serve as promising tools that open up new research questions in social sciences. In particular, open-source language models fine-tuned for specific applications can be used to mimic human behavior and create social simulation systems. In this study, we model the opinions of eight columnists with diverse political ideologies. When the fine-tuned models are analyzed for their support on various claims made in columns, similarities are observed among the models based on columnists with similar viewpoints. However, when the base open-source model is used without fine-tuning, it fails to effectively capture the differences between the columnists’ claims. Additionally, survey questions from election studies are posed to these models, and principal component analysis of the responses revealed meaningful distinctions that can be explained partly by economic voting theory between columnists. Last, their view on various security issues is shown to be an important dimension to differentiate pro-government columnists.",
                bibtex: "@INPROCEEDINGS{11112306,\n    author={Afşin, Görkem and Kabadayı, Baturalp Arslan and Özdil, Eren and Kaya, Kamer and Varol, Onur},\n    booktitle={2025 33rd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Modelling Columnists with Large Language Models}, \n    year={2025},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Surveys;Economics;Analytical models;Biological system modeling;Voting;Large language models;Signal processing;Behavioral sciences;Security;Principal component analysis;LLM;columnist;election survey},\n    doi={10.1109/SIU66497.2025.11112306}}"
            },
            {
                title: "Digital Trends of the Turkish Labor Market: An Analysis of Online Job Postings",
                authors: "Ahmet Kurnaz; İdil Ayberk",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU66497.2025.11111871", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "The changing dynamics of the labor market, influenced by technological progress, has become a major focus of academic and policy discourse. The increasing importance of job evolution and automation has underscored the potential for significant employment disruptions. With the emergence of productive AI as a powerful force, its impact on labor markets is profound, offering improved productivity and lower labor costs, but also posing significant challenges. This research addresses the digital skills requirements of the Turkish labor market from 2015 to 2024, using online job postings to examine evolving demands. The study tags 1.54 million job postings collected from open sources into ISCO 2 digits using large language models and provides a comprehensive view of the digital skills landscape across various occupations. The conclusions are that governments should prioritize up-skilling and reskilling initiatives to address skills shortages exacerbated by digitalization by analyzing the differences between labor supply and demand, and mitigate the impact of high unemployment rates and underemployment on potential productivity gains by addressing skills mismatch.",
                bibtex: "@INPROCEEDINGS{11111871,\n    author={Kurnaz, Ahmet and Ayberk, İdil},\n    booktitle={2025 33rd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Digital Trends of the Turkish Labor Market: An Analysis of Online Job Postings}, \n    year={2025},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Productivity;Automation;Large language models;Government;Force;Employment;Signal processing;Market research;Labor resources;Unemployment;automation;digital skills;skill mismatch;LLMs},\n    doi={10.1109/SIU66497.2025.11111871}}"
            },
            {
                title: "Analysis of Diplomatic Texts with LLMs: A Hybrid Approach in Computational Social Sciences",
                authors: "Ahmet Kurnaz; Akın Ünver",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU66497.2025.11112347", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "This paper presents the practical application of big language models in text mining and topic modeling processes using texts shared online by the Ministry of Foreign Affairs of the Republic of Türkiye. The research describes an iterative and hybrid algorithm in which domain experts and large language models work together. The findings indicate that well-defined themes play a critical role in model success. It is emphasized that in social sciences, topic modeling processes should be handled with a tailor-made approach that includes the contextual interpretations of the researcher in the data evaluation processes, rather than being evaluated only through numerical outputs. In conclusion, the proposed algorithm offers a comprehensive and flexible analysis opportunity in social scientific research by generating topic labels suitable for qualitative or quantitative analysis of texts.",
                bibtex: "@INPROCEEDINGS{11112347,\n    author={Kurnaz, Ahmet and Ünver, Akın},\n    booktitle={2025 33rd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Analysis of Diplomatic Texts with LLMs: A Hybrid Approach in Computational Social Sciences}, \n    year={2025},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Text mining;Statistical analysis;Large language models;Social sciences;Signal processing algorithms;Signal processing;Natural language processing;Iterative algorithms;Data models;Numerical models;topic modelling;LLMs;natural language processing},\n    doi={10.1109/SIU66497.2025.11112347}}"
            }
        ],
        gallery: [
            { url: "assets/2025-presentation-1.jpg", caption: "Paper presentation" },
        ]
    },
    "2024": {
        location: "Tarsus Üniversitesi, Mersin, Türkiye",
        dates: "15-18 Mayıs, 2024",
        callForPapers: "",
        committee: ["Dr. Didem Gündoğdu", "Dr. Uzay Çetin"],
        papers: [
            {
                title: "City-level User Location Detection from Social Media and Analysis of Political Participation",
                authors: "Alp Önder Yener; Ali Najafi; Onur Varol",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU61531.2024.10600825", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "The social media platform X (Twitter), regularly used by hundreds of thousands of users in Türkiye, serves as a space where users share content, express opinions on current issues, and interact with each other. Some of the agenda on social media reflects events that occurred on the same day, allowing users to follow closely events happening in their vicinity through the platform. The locations of these users in different cities of Türkiye can be inferred from the metadata of the tweets, but there is currently no system specifically designed for Türkiye. We first present an approach to automatically infer the user locations at the city-level. Subsequently, the validation of these inferences examined by analyzing volume of activities obtained when a politician visiting a particular city. Finally, the relationship between voting percentages at the election and changes observed in the quantity of social media posts is investigated.",
                bibtex: "@INPROCEEDINGS{10600825,\n    author={Yener, Alp Önder and Najafi, Ali and Varol, Onur},\n    booktitle={2024 32nd Signal Processing and Communications Applications Conference (SIU)}, \n    title={City-level User Location Detection from Social Media and Analysis of Political Participation}, \n    year={2024},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Social networking (online);Voting;Urban areas;Blogs;Signal processing;Metadata;Twitter;data science;reverse geocoding;elections},\n    doi={10.1109/SIU61531.2024.10600825}}"
            },
            {
                title: "Uncovering Public Attitudes: Utilizing a PCA-based Approach to Examine Anti-Immigrant Attitudes",
                authors: "Ubeyd Öktem",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU61531.2024.10601143", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "This research will observe the determinants of public attitudes towards immigrants in Turkey depending on survey questions from 2016 and 2019. The literature suggests the effects of several variables on the perception towards immigrants, with specific emphasis on encounter level and economic conditions. This research aims to test these theories in Turkey’s case with migration and observe their effects in time. Although the primary intention is to examine these relations, the paper also claims to utilize unsupervised machine learning methods in variable construction/indexing. Therefore, the other aspect of this research is to utilize Principal Component Analysis in variable construction as opposed to equally weighting different variables. As a combination of quantitative and computational sociology methodologies, this paper will initially answer two forms of questions: one sociological and the other methodological.",
                bibtex: "@INPROCEEDINGS{10601143,\n    author={Öktem, Ubeyd},\n    booktitle={2024 32nd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Uncovering Public Attitudes: Utilizing a PCA-based Approach to Examine Anti-Immigrant Attitudes}, \n    year={2024},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Surveys;Economics;Shape;Sociology;Machine learning;Signal processing;Position measurement;public opinion dynamics;migration;integration;polarization;Principal Component Analysis;variable construction;indexing},\n    doi={10.1109/SIU61531.2024.10601143}}"
            },
            {
                title: "Gender-Specific Political Agendas: A Topic Modeling Analysis of Turkish Grand National Assembly Speeches",
                authors: "Ladin Toplu; Tuğçe Şahinyılmaz; Didem Gündoğdu",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU61531.2024.10601085", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "The increasing participation of women in the political sphere plays an important role in shaping parliamentary debates. Today, twenty percent of the Turkish Grand National Assembly (TGNA) is made up of women MPs. However, how this increase affects the issues debated in the parliament remains unknown. Our study combines computational methods and social sciences to investigate gender dynamics in TGNA. In order to understand the diversity of topics and whether female MPs systematically differ from their male counterparts in terms of the content of their speeches, topic modelling is employed using Latent Dirichlet Allocation (LDA) and the topics addressed by female and male MPs are analyzed comparatively. The findings show that female MPs systematically participate more frequently in debates on women-centred issues such as family, domestic violence and femicide, while their participation in debates on other issues such as law, health, employment and agriculture is in line with their male counterparts.",
                bibtex: "@INPROCEEDINGS{10601085,\n    author={Toplu, Ladin and Şahinyılmaz, Tuğçe and Gündoğdu, Didem},\n    booktitle={2024 32nd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Gender-Specific Political Agendas: A Topic Modeling Analysis of Turkish Grand National Assembly Speeches}, \n    year={2024},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Analytical models;Computational modeling;Social sciences;Employment;Signal processing;Resource management;Cultural differences;TGNA;gender;topic modelling;female members of the parliament},\n    doi={10.1109/SIU61531.2024.10601085}}"
            },
            {
                title: "Instagram Account Classification: Influencer vs. Company Profiles",
                authors: "Özgün Yargı; Onur Varol",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU61531.2024.10600854", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "As the use of social media platforms has increased over time, there has been a corresponding rise in the number of accounts influencing masses, such as influencers and companies, active on these platforms. Particularly in marketing efforts, the use of influencers and the need for brands to identify these influencers through automated systems have increased. In this study, we developed a model using existing web scraping methods and a limited data source to distinguish between influencers and companies based on Instagram profile data. After conducting exploratory analysis on the obtained data, the focus shifted to feature extraction. To effectively utilize category-based features in the dataset, we employed the CatBoost model, achieving a %98.2 auc rate with this model. In addition to achieving success in the classification problem, SHAP values were analyzed for interpretability of the model’s results, exploring the features that distinguish brands from influencers in detail.",
                bibtex: "@INPROCEEDINGS{10600854,\n    author={Yargi, Ozgun and Varol, Onur},\n    booktitle={2024 32nd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Instagram Account Classification: Influencer vs. Company Profiles}, \n    year={2024},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Analytical models;Social networking (online);Soft sensors;Companies;Signal processing;Feature extraction;Data models;Instagram;machine learning;influencer detection},\n    doi={10.1109/SIU61531.2024.10600854}}"
            },
            {
                title: "Accuracy-Increasing and Vulnerability-Reducing Improvements in Solar Power Systems’ Glare Analysis",
                authors: "Mehmet Zahid Kartal; Ergin Gökkaya; Osman Karabayir",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU61531.2024.10600834", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Solar power plants (SPP) are one of the energy resources that are efficient in terms of renewable energy and have a widespread installation tendency. These systems, along with the observers at airports tower, can have a negative glare effect on land and aircraft drivers. In this study, the advanced GPA simulation tool (GPA-A) is introduced by adding accuracy increasing and negative impact reducing features to the GPA (Solar Glare Analysis) tool, which was previously developed to examine the deteriorating glare effect. The GPA-A tool includes line of sight control compared to the previous version, as well as location and size determination capabilities of physical obstacles that can be applied to prevent negative impact. The advantages of the developed interaction analysis tool over GPA have been demonstrated through simulations.",
                bibtex: "@INPROCEEDINGS{10600834,\n    author={Kartal, Mehmet Zahid and Gökkaya, Ergin and Gökkaya, Ergin},\n    booktitle={2024 32nd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Accuracy-Increasing and Vulnerability-Reducing Improvements in Solar Power Systems’ Glare Analysis}, \n    year={2024},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Renewable energy sources;Accuracy;Poles and towers;Solar energy;Signal processing;Observers;Airports;Solar energy panel;improved glare affect analysis;line of sight check;applying physical obstruction},\n    doi={10.1109/SIU61531.2024.10600834}}"
            },
            {
                title: "Safety Tracking System for Bathroom Shower Environment",
                authors: "Eren Ölmez; Mehmet Oktay Özsoy; Ramil Jabiyev; Beren Ansen; Umut Eren Aktürk; Ege Bora Oral; Can Soygür;  Billur Barshan; Mehmet Alper Kutay; Yasemin Afacan",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU61531.2024.10601079", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "This study is aimed at recognizing fall incidents that occur in the bathroom shower area. Bathroom falls are one of the primary reasons for injuries (which can be fatal), especially for the elderly. For that reason, a system that can detect bathroom falls and trigger necessary emergency scenarios is implemented. To that end, a system comprising radar sensors and IMUs is implemented. The information regarding the door and the shower head is used in a supportive way for fall detection. If a fall is detected, fall occurrence warning is sent to the necessary destinations through IoT.",
                bibtex: "@INPROCEEDINGS{10601079,\n    author={Ölmez, Eren and Özsoy, Mehmet Oktay and Jabiyev, Ramil and Ansen, Beren and Aktürk, Umut Eren and Oral, Ege Bora and Soygür, Can and Barshan, Billur and Kutay, Mehmet Alper and Afacan, Yasemin},\n    booktitle={2024 32nd Signal Processing and Communications Applications Conference (SIU)}, \n    title={Safety Tracking System for Bathroom Shower Environment}, \n    year={2024},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Measurement units;Radar;Signal processing;Radar tracking;Sensor systems;Sensors;Safety;Elderly falls;fall detection;radar sensor;Inertial Measurement Unit (IMU);Internet of Things (IoT)},\n    doi={10.1109/SIU61531.2024.10601079}}"
            }
        ],
        gallery: [
        ]
    },
    "2023": {
        location: "İstanbul Teknik Üniversitesi, İstanbul, Türkiye",
        dates: "5-8 Temmuz, 2023",
        callForPapers: "",
        committee: ["Dr. Didem Gündoğdu",  "Prof. Berrin Yanıkoğlu"],
        papers: [
            {
                title: "Who Follows Turkish Presidential Candidates in 2023 Elections?",
                authors: "Onur Varol",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10223884", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Social media serves as an important platform for political discussions, especially during election periods. While politicians use the platform to reach out to voters and share their campaigns, it also creates a debate environment for different voter groups. It is possible to see supportive and critical speeches simultaneously. Particularly as the election date approaches, undecided voters follow politicians on online platforms to learn about their campaigns. Changes in politicians' followers can be observed in detail by analyzing women and young voters who may be decisive in the results. In this study, we analyzed candidates for the 2023 Presidential elections of Türkiye and their followers on the Twitter platform. We examined how the demographic of these followers change over time. Prior to analyzing demographics such as gender and age group, we identified bot accounts and isolated them from the dataset. Significant events are reflected in the number of followers and the relationship between the observed anomalies and changes in the demographics have also been studied in this work.",
                bibtex: "@INPROCEEDINGS{10223884,\n    author={Varol, Onur},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={Who Follows Turkish Presidential Candidates in 2023 Elections?}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Social networking (online);Chatbots;Blogs;Voting;Social sciences;Signal processing;Programming;computational social science;social media analysis;election analysis;bot detection;demographics analysis},\n    doi={10.1109/SIU59756.2023.10223884}}"
            },
            {
                title: "Stance Detection of Turkish Twitter Accounts",
                authors: "Mehmet Deniz Türkmen; Dilara Doğan; Osman Abul; Mucahid Kutlu",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10223816", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Twitter offers users an environment where they can express their opinions on any subject. As a result, user activities have become an important resource for various sociological studies. In this study, we proposed machine learning methods that utilize text-based and interaction-based features to predict the opinions of users who post messages in Turkish. We also performed zero-shot classification using ChatGPT. We labeled 4,502 accounts that posted during the Turkey Presidential election in 2018 according to the candidates they supported. In our experiments with the dataset we created, we achieved a classification accuracy of 0.831 for users.",
                bibtex: "@INPROCEEDINGS{10223816,\n    author={Türkmen, Mehmet Deniz and Doğan, Dilara and Abul, Osman and Kutlu, Mucahid},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={Stance Detection of Turkish Twitter Accounts}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Social networking (online);Support vector machines;Blogs;Chatbots;Voting;Radio frequency;Signal processing;Social media;author profiling},\n    doi={10.1109/SIU59756.2023.10223816}}"
            },
            {
                title: "Improving Hate Speech Detection: The Impact of Semantic Representations and Preprocessing Techniques",
                authors: "Necva Bölücü; Aysegül Özerdem",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10224051", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Social Media is one of the important tools that can be used to measure the pulse of a society. However, when hate speech targeting an individual or group is produced through this tool, this situation be-comes a phenomenon that can lead to social problems. In this context, the detection of hate speech is crucial. In this study, which is proposed for the hate speech detection shared task at SIU 2023 NST, the importance of semantic representations obtained through the Ope-nAI API is investigated in order to detect hate speech effectively. As preprocessing steps, the normalization of the dataset, an emoji dictionary, and SMOTE technic for the problem of imbalanced dataset have been app-lied. To demonstrate the importance of this step for the problem, basic machine learning techniques, SVM and cosine similarity, are being utilized. The experimental results show that the semantic representations offer a successful solution to the problem with machine learning models. In particular, the solution of the pre-processing step applied for the imbalanced dataset has a great contribution to the problem.",
                bibtex: "@INPROCEEDINGS{10224051,\n    author={Bölücü, Necva and Özerdem, Aysegül},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={Improving Hate Speech Detection: The Impact of Semantic Representations and Preprocessing Techniques}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Hate speech;Semantics;Transformers;Support vector machines;Social networking (online);Signal processing;Search problems;social media;hate speech;semantic;API;preprocessing},\n    doi={10.1109/SIU59756.2023.10224051}}"
            },
            {
                title: "Recent History of Contentious Politics in Turkey: Mapping Intergroup Alliances via Network Anaysis",
                authors: "Ubeyd Oktem; Yağmur Çağatay; Burak Çetiner",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10224060", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "In this paper, we aim to provide a comprehensive analysis of the protests in Turkey and try to bring a temporal perspective to the issue to understand the structure of alliances formed between 2013-2016. In this line, we look at how these alliances differ over time. We choose 2 major events that affected the general scheme of social movements in Turkey: Gezi Protests and Coup D'etat Attempt on 15th of July. We would like to observe the effects of these events in the formation of political alliances on a temporal basis. To this end, we will be using social network analysis to visualize and analyze the political alliances as well as deduce the positionality of the actors in these protests.",
                bibtex: "@INPROCEEDINGS{10224060,\n    author={Oktem, Ubeyd and Çağatay, Yağmur and Çetiner, Burak},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={Recent History of Contentious Politics in Turkey: Mapping Intergroup Alliances via Network Anaysis}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Integrated circuits;Cogeneration;Sociology;Network analyzers;Government;Gender issues;Visualization;social network analysis;computational social science;contentious politics;social movements;political alliances},\n    doi={10.1109/SIU59756.2023.10224060}}"
            },
            {
                title: "Public Opinion on UK Public Transportation Through Sentiment Analysis and Topic Modeling",
                authors: "Aslıgül Aksan; Hatice Camgöz Akdağ",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10223775", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Social media has become a valuable data source for gathering and analyzing public opinion on products and services. Among the popular social media platforms, Twitter stands out for its ability to provide place-time information in a text format called tweets. In this study, sentiment analysis and topic modeling of tweets related to public transportation in the United Kingdom were analyzed. Using the Robustly Optimized BERT Pretraining Approach (RoBERTa), tweets are divided according to their polarities: positive, neutral, and negative. Additionally, Latent Dirichlet Allocation (LDA) is applied to positive and negative tweets, and topics providing the causes are obtained. These topics reveal the strengths and weaknesses of the United Kingdom's public transportation service.",
                bibtex: "@INPROCEEDINGS{10223775,\n    author={Aksan, Aslıgül and Akdağ, Hatice Camgöz},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={Public Opinion on UK Public Transportation Through Sentiment Analysis and Topic Modeling}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={COVID-19;Analytical models;Social networking (online);Public transportation;Blogs;Resource management;Sentiment analysis;sentiment analysis;topic modelling;public transportation},\n    doi={10.1109/SIU59756.2023.10223775}}"
            },
            {
                title: "LDA Topic Modeling on Twitter Data Concerning Immigrants and Refugees",
                authors: "Halil İbrahim Ergül; Ayşecan Terzioğlu; Murat Tercan; Berrin Yanıkoğlu; İnanç Arın",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10224005", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "In this study, the attitudes and opinions of Twitter users in Turkey towards immigrants have been examined to see how people express their thoughts and opinions about immigrants in Turkey and whether there are any dominant and interpretable topics that emerge. After a comprehensive pre-preprocessing, latent themes in the tweets are discovered using the Latent Dirichlet Allocation (LDA) topic modeling methodology. As the result of this analysis, 14 topics have emerged as meaningful and interpretable. The study is done over a small dataset and is somewhat limited; however, the results can shed light on the perspectives of Twitter users towards immigrants and refugees.",
                bibtex: "@INPROCEEDINGS{10224005,\n    author={Ergül, Halil İbrahim and Terzioğlu, Ayşecan and Tercan, Murat and Yanıkoğlu, Berrin and Arın, İnanç},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={LDA Topic Modeling on Twitter Data Concerning Immigrants and Refugees}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Social networking (online);Blogs;Resource management;Natural language processing;Social sciences;Hate speech;Data models;hate speech;anti-immigrant;computational social sciences;topic modeling;natural language processing},\n    doi={10.1109/SIU59756.2023.10224005}}"
            },
            {
                title: "Fine-Grained Mapping of Migrants in Istanbul Using Satellite Imaging and Mobile Phone Data",
                authors: "Bilgeçağ Aydoğdu; Çağla Balçık; Subhi Güneş; Rahman Momeni; Albert Ali Salah",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10223985", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "This study aims to create a fine grained mapping of the migrant population in Istanbul using land use, nighttime satellite, and extended detail records (xDR) data. We use statistical bias correction methods such as calibration and weighting, spatial scaling methods, and machine learning methods to create the fine granular maps. The use of big data allows for a granular analysis of migrant behavior, contributing to evidence based policies, which can improve the living conditions of migrants. In this study, we use only aggregated data in order to protect personal data. The results demonstrate that satellite and mobile data sources can be used for fine-grained population mapping.",
                bibtex: "@INPROCEEDINGS{10223985,\n    author={Aydoğdu, Bilgeçağ and Balçık, Çağla and Güneş, Subhi and Momeni, Rahman and Salah, Albert Ali},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={Fine-Grained Mapping of Migrants in Istanbul Using Satellite Imaging and Mobile Phone Data}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Integrated circuits;Unified modeling language;Satellites;Integrated circuit modeling;Statistics;Sociology;Imaging;Mobile data;Satellite imaging;Migration indicators;Computational social science},\n    doi={10.1109/SIU59756.2023.10223985}}"
            },
            {
                title: "Footfall Prediction Using Graph Neural Networks",
                authors: "Hasan Alp Boz; Mohsen Bahrami; Selim Balcisoy; Alex Pentland",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10224021", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Accurately predicting the potential foot traffic for a new business is a crucial task since it directly impacts a business's ability to generate revenue. In this work, a graph neural networkbased approach is introduced in which the foot traffic between businesses and neighborhoods is represented in a bipartite network setting where edges capture the yearly-aggregated foot traffic quartile labels. Resulting bipartite networks are fed to the graph neural network to predict the foot traffic label for a new business for all the available neighborhoods. The graph neural network model outperforms well-established Huff model by 3% higher F1 score. Our results indicate that utilizing graph neural network architectures for foot traffic prediction is promising and requires more attention from the field.",
                bibtex: "@INPROCEEDINGS{10224021,\n    author={Boz, Hasan Alp and Bahrami, Mohsen and Balcisoy, Selim and Pentland, Alex},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={Footfall Prediction Using Graph Neural Networks}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-3},\n    keywords={Computational modeling;Reactive power;Business;Graph neural networks;Data mining;Nanoelectromechanical systems;Machinery;omputational Social Science;Human Mobility;Graph Neural Networks},\n    doi={10.1109/SIU59756.2023.10224021}}"
            },
            {
                title: "A Bibliometric Analysis of Computational Social Science in Turkish Academia",
                authors: "Tuba Bircan; Almila Akdağ Salah; Haodong Qi",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10223998", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Using bibliometrics, this study explores the land-scape of social computing sciences within the Turkish academic sphere. The analysis conducted at both the country and organizational levels reveals that collaborations in the field of social computing are not solely influenced by geographical factors. Through network analysis of keyword co-occurrences, distinct thematic patterns emerge, highlighting areas such as health-related applications, the social implications of computational approaches, the intersection of computational methods with the economy and agriculture, machine learning techniques, and the utilization of big data analytics for business applications. These findings provide evidence of the multidisciplinary nature inherent in social computing research.",
                bibtex: "@INPROCEEDINGS{10223998,\n    author={Bircan, Tuba and Salah, Almila Akdağ and Qi, Haodong},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={A Bibliometric Analysis of Computational Social Science in Turkish Academia}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Social computing;Bibliometrics;Social sciences;Collaboration;Network analyzers;Machine learning;Signal processing;bibliometrics;social computing;citation networks},\n    doi={10.1109/SIU59756.2023.10223998}}"
            },
            {
                title: "SIU2023-NST - Hate Speech Detection Contest",
                authors: "İnanç Arın; Zeynep Işık; Seçilay Kutal; Somaiyeh Dehghan; Arzucan Özgür; Berrin Yanikoğlu",
                links: [
                    { text: "IEEE Xplore", url: "https://doi.org/10.1109/SIU59756.2023.10223800", icon: "fa-solid fa-building-columns" }
                ],
                abstract: "Hate speech spread on social media can strongly affect people and societies, especially when it targets a specific group of people in terms of religion, culture, or a specific social situation, such as refugees. For this reason, the detection and elimination of hate speech in social networks have attracted the attention of natural language processing researchers in recent years. A competition is organized to benchmark progress in Turkish hate speech recognition, within SIU2023 Computational Social Sciences special session, with four different tasks. A total of 20 teams registered for the competition, while eight teams submitted results at the end. The details of the winning models and their results are explained in this paper.",
                bibtex: "@INPROCEEDINGS{10223800,\n    author={Arın, İnanç and Işık, Zeynep and Kutal, Seçilay and Dehghan, Somaiyeh and Özgür, Arzucan and Yanikoğlu, Berrin},\n    booktitle={2023 31st Signal Processing and Communications Applications Conference (SIU)}, \n    title={SIU2023-NST - Hate Speech Detection Contest}, \n    year={2023},\n    volume={},\n    number={},\n    pages={1-4},\n    keywords={Adaptation models;Social networking (online);Hate speech;Task analysis;Voice activity detection;Transformers;Speech recognition;Hate Speech Detection;Natural Language Processing;Deep Learning;Turkish Language},\n    doi={10.1109/SIU59756.2023.10223800}}"
            }
            
        ],
        gallery: [
        ]
    },
    "2022": {
        location: "Safranbolu, Türkiye",
        dates: "15-18 Mayıs, 2022",
        callForPapers: "",
        committee: ["Dr. Didem Gündoğdu"],
        papers: [
            
        ],
        gallery: [
        ]
    }

});

const app = createApp({
    setup() {
        // State
        const workshopName = ref("Hesaplamalı Sosyal Bilimler");

        // Compute available years from data and sort descending
        const sortedYears = computed(() => {
            return Object.keys(workshopData).sort((a, b) => parseInt(b) - parseInt(a));
        });

        const latestYear = computed(() => sortedYears.value[0]);
        const currentYear = ref(latestYear.value);

        const currentData = computed(() => {
            return workshopData[currentYear.value];
        });

        // Call for Papers state tracking (open by default for current year)
        const cfpOpen = ref(true);

        // Reset Call for Papers state when year changes
        watch(currentYear, (newYear) => {
            if (newYear === latestYear.value) {
                cfpOpen.value = true;
            } else {
                cfpOpen.value = false;
            }
        });

        const toggleCFP = () => {
            cfpOpen.value = !cfpOpen.value;
        };

        // Paper state tracking
        // Format: { "2025_0_abstract": true, "2025_1_bibtex": false }
        const paperStates = reactive({});

        const togglePaperState = (year, index, type) => {
            const key = `${year}_${index}_${type}`;
            paperStates[key] = !paperStates[key];
        };

        const isPaperStateOpen = (year, index, type) => {
            const key = `${year}_${index}_${type}`;
            return !!paperStates[key];
        };

        const copyToClipboard = async (text, event) => {
            if (!navigator.clipboard) {
                alert("Clipboard API not supported");
                return;
            }
            try {
                await navigator.clipboard.writeText(text);
                const btn = event.currentTarget;
                const originalHtml = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        };

        // Lightbox State
        const lightbox = ref({
            isOpen: false,
            currentIndex: 0
        });

        // Lightbox Methods
        const openLightbox = (index) => {
            lightbox.value.currentIndex = index;
            lightbox.value.isOpen = true;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        };

        const closeLightbox = () => {
            lightbox.value.isOpen = false;
            document.body.style.overflow = '';
        };

        const nextImage = () => {
            if (!currentData.value.gallery) return;
            lightbox.value.currentIndex = (lightbox.value.currentIndex + 1) % currentData.value.gallery.length;
        };

        const prevImage = () => {
            if (!currentData.value.gallery) return;
            lightbox.value.currentIndex =
                (lightbox.value.currentIndex - 1 + currentData.value.gallery.length) % currentData.value.gallery.length;
        };

        const currentLightboxImage = computed(() => {
            if (!currentData.value.gallery || currentData.value.gallery.length === 0) return {};
            return currentData.value.gallery[lightbox.value.currentIndex];
        });

        const hasMultipleImages = computed(() => {
            return currentData.value.gallery && currentData.value.gallery.length > 1;
        });

        // Keyboard navigation for lightbox
        const handleKeydown = (e) => {
            if (!lightbox.value.isOpen) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        onMounted(() => {
            window.addEventListener('keydown', handleKeydown);
        });

        onUnmounted(() => {
            window.removeEventListener('keydown', handleKeydown);
        });

        // Watch year change to trigger animations (hacky way without complex TransitionGroup)
        watch(currentYear, () => {
            // Force re-flow to trigger CSS animations on elements
            const sections = document.querySelectorAll('.fade-in');
            sections.forEach(el => {
                el.style.animation = 'none';
                el.offsetHeight; /* trigger reflow */
                el.style.animation = null;
            });
        });

        return {
            workshopName,
            sortedYears,
            latestYear,
            currentYear,
            currentData,
            cfpOpen,
            toggleCFP,
            isPaperStateOpen,
            togglePaperState,
            copyToClipboard,
            lightbox,
            openLightbox,
            closeLightbox,
            nextImage,
            prevImage,
            currentLightboxImage,
            hasMultipleImages
        };
    }
});

app.mount('#app');
