import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft, ArrowDown, ArrowLeft, ArrowRight, Menu, X, Phone, MessageCircle, ShieldCheck, Ruler, Layers3, Sparkles, ChevronDown, Instagram, MapPin, CheckCircle2 } from 'lucide-react';
import Kitchen3D from './Kitchen3D.jsx';

const copy = {
  ar: {
    nav: ['الرئيسية', 'أعمالنا', 'صمّم مطبخك', 'رحلتك معنا', 'الأسعار'],
    heroEyebrow: 'مطابخ تُصنع لتدوم',
    heroTitle: 'مساحة يومك،\\nبتفاصيل تستحقها.',
    heroText: 'نحوّل رؤيتك إلى مطبخ يجمع بين جمال التصميم ودقة التنفيذ، من أول قياس حتى آخر لمسة.',
    explore: 'اكتشف أعمالنا', contact: 'اطلب استشارة',
    intro: 'حيث تلتقي الحرفة بالتصميم',
    introTitle: 'كل تفصيلة لها حكاية.\\nوكل مطبخ له شخصيته.',
    introText: 'نؤمن أن المطبخ ليس مجرد مساحة عمل؛ بل قلب المنزل. لذلك نصمم كل مساحة بعناية لتناسب أسلوب حياتك واحتياجاتك اليومية.',
    works: 'مختارات من أعمالنا', worksSub: 'أفكار متنوعة، وتفاصيل تصنع الفرق.',
    configure: 'مساحة التجربة', configureTitle: 'ابدأ بتخيّل مطبخك.', configureText: 'غيّر ألوان الخزائن والسطح، وحرّك المشهد لتشاهد التصميم من زوايا مختلفة.',
    cabinet: 'لون الخزائن', top: 'لون السطح', walnut: 'جوز دافئ', ivory: 'عاجي', sage: 'أخضر هادئ', charcoal: 'فحمي', oak: 'بلوط طبيعي',
    marble: 'رخامي فاتح', sand: 'حجري رملي', dark: 'داكن',
    process: 'رحلتك معنا', processTitle: 'من أول فكرة… إلى مطبخك الجديد.',
    processText: 'خطوات واضحة وتواصل مستمر، لتكون على اطلاع بكل مرحلة.',
    steps: [['01','استمعنا لك','نفهم احتياجاتك وذوقك وميزانيتك.'],['02','المعاينة والقياس','نحدد المساحة والتفاصيل على الطبيعة.'],['03','التصميم والاختيار','نجهز تصوراً ثلاثي الأبعاد ونختار الخامات معك.'],['04','التصنيع والتركيب','تنفيذ دقيق ومتابعة حتى التسليم.']],
    pricing: 'استثمارك في التفاصيل', pricingTitle: 'خيارات تناسب مشروعك.', pricingText: 'الأسعار التالية استرشادية فقط، ويتحدد السعر النهائي بعد المعاينة واعتماد المقاسات والخامات والإكسسوارات.',
    per: 'ريال سعودي / متر طولي — سعر استرشادي', request: 'اطلب تسعيراً لمطبخك',
    plans: [['عملي','خامات عملية وتشطيبات أنيقة','ابتداءً من 1,200'],['متوازن','توازن بين الخامة والتفاصيل','ابتداءً من 1,800'],['فاخر','اختيارات راقية وتفاصيل مميزة','ابتداءً من 2,600']],
    note: 'الأرقام أمثلة توضيحية وليست عرض سعر معتمداً. يتم تحديثها وفق تكلفة المواد ونطاق المشروع.',
    trust: 'ثقتكم مسؤوليتنا', trustTitle: 'جودة واضحة. والتزام من البداية.',
    trustItems: [['خامات مختارة','نساعدك في اختيار خامات تناسب الاستخدام والميزانية.'],['تنفيذ باهتمام','متابعة مراحل العمل والاهتمام بالتفاصيل.'],['ضمان مكتوب','تُحدد تفاصيل الضمان ومدته في عرض السعر والعقد.']],
    proof: 'من بيوت عملائنا', proofTitle: 'التفاصيل الحقيقية تتحدث.',
    proofText: 'سيتم إضافة صور وفيديوهات المشاريع المنفذة وآراء العملاء بعد اعتمادها وموافقتهم على النشر.',
    cta: 'لديك مساحة في بالك؟', ctaTitle: 'خلّينا نبدأ من مقاسك.', ctaText: 'شاركنا موقعك واحتياجك، وسنتواصل معك لترتيب المعاينة ومناقشة الخيارات.',
    name: 'الاسم', phone: 'رقم الجوال', city: 'المدينة', message: 'حدثنا عن مطبخك', send: 'إرسال طلب المعاينة',
    footer: 'تصميم مدروس. تنفيذ يُعتمد عليه.', rights: 'جميع الحقوق محفوظة.',
    cities: ['الرياض','جدة','الدمام','مكة المكرمة','المدينة المنورة','مدينة أخرى']
  },
  en: {
    nav: ['Home', 'Projects', 'Design yours', 'Our process', 'Pricing'],
    heroEyebrow: 'Kitchens made to last',
    heroTitle: 'A space for living,\\ncrafted around you.',
    heroText: 'We turn your vision into a kitchen where thoughtful design meets precise execution — from the first measurement to the final detail.',
    explore: 'Explore our work', contact: 'Book a consultation',
    intro: 'Where craft meets design',
    introTitle: 'Every detail has a story.\\nEvery kitchen has a character.',
    introText: 'A kitchen is more than a workspace; it is the heart of a home. We shape each space around your lifestyle and everyday needs.',
    works: 'Selected projects', worksSub: 'Distinct ideas, thoughtful details.',
    configure: 'The design studio', configureTitle: 'Imagine your kitchen.', configureText: 'Choose cabinet and countertop finishes, then rotate the scene to explore the design.',
    cabinet: 'Cabinet finish', top: 'Countertop', walnut: 'Warm walnut', ivory: 'Ivory', sage: 'Soft sage', charcoal: 'Charcoal', oak: 'Natural oak',
    marble: 'Light marble', sand: 'Sand stone', dark: 'Dark',
    process: 'Your journey', processTitle: 'From the first idea to your new kitchen.',
    processText: 'Clear steps and consistent communication at every stage.',
    steps: [['01','We listen','We understand your needs, taste and budget.'],['02','Survey & measure','We assess your space and on-site details.'],['03','Design & select','We prepare a 3D concept and choose finishes together.'],['04','Build & install','Careful execution and follow-up through handover.']],
    pricing: 'An investment in detail', pricingTitle: 'Options for your project.', pricingText: 'The following prices are indicative only. Final pricing depends on site survey, approved measurements, materials and fittings.',
    per: 'SAR / linear metre — indicative', request: 'Request a project quote',
    plans: [['Essential','Practical materials and refined finishes','From 1,200'],['Signature','A balance of materials and details','From 1,800'],['Bespoke','Premium selections and distinctive details','From 2,600']],
    note: 'These figures are illustrative examples, not a confirmed quotation. Actual prices depend on material costs and project scope.',
    trust: 'Your trust is our responsibility', trustTitle: 'Clear quality. Commitment from day one.',
    trustItems: [['Selected materials','We help you choose finishes for your use and budget.'],['Careful execution','Work-stage follow-up and attention to detail.'],['Written warranty','Warranty terms and duration are specified in your quotation and contract.']],
    proof: 'Inside our clients’ homes', proofTitle: 'Real details speak for themselves.',
    proofText: 'Completed project photos, videos and client reviews will be added after approval and consent to publish.',
    cta: 'Have a space in mind?', ctaTitle: 'Let’s start with your measurements.', ctaText: 'Tell us where you are and what you need. We’ll contact you to arrange a survey and discuss the options.',
    name: 'Name', phone: 'Mobile number', city: 'City', message: 'Tell us about your kitchen', send: 'Request a site visit',
    footer: 'Thoughtful design. Reliable execution.', rights: 'All rights reserved.',
    cities: ['Riyadh','Jeddah','Dammam','Makkah','Madinah','Other city']
  }
};

const projects = [
  { title: 'دفء الخشب', en: 'Warm walnut', type: 'مودرن دافئ · الرياض', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85' },
  { title: 'هدوء العاج', en: 'Quiet ivory', type: 'مينيمال · جدة', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85' },
  { title: 'أناقة الحجر', en: 'Stone elegance', type: 'معاصر · الدمام', img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85' }
];

export default function App() {
  const [lang, setLang] = useState('ar');
  const [menu, setMenu] = useState(false);
  const [cabinet, setCabinet] = useState('walnut');
  const [top, setTop] = useState('ivory');
  const [sent, setSent] = useState(false);
  const t = copy[lang];
  const rtl = lang === 'ar';
  const dir = rtl ? 'rtl' : 'ltr';
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };
  const wa = 'https://wa.me/?text=' + encodeURIComponent(rtl ? 'مرحباً، أرغب في الاستفسار عن تصميم وتنفيذ مطبخ.' : 'Hello, I would like to enquire about a kitchen design and installation.');

  return (
    <div dir={dir} className={rtl ? 'app arabic' : 'app english'}>
      <header className="header">
        <a className="brand" href="#home" aria-label="AL AMMAR home">
          <span className="brand-mark">A</span>
          <span><b>AL AMMAR</b><small>KITCHENS & INTERIORS</small></span>
        </a>
        <nav className="desktop-nav">
          {t.nav.map((n, i) => <button key={n} onClick={() => scrollTo(['home','projects','studio','process','pricing'][i])}>{n}</button>)}
        </nav>
        <div className="header-actions">
          <button className="lang" onClick={() => setLang(rtl ? 'en' : 'ar')}>{rtl ? 'EN' : 'عربي'}</button>
          <button className="header-cta" onClick={() => scrollTo('contact')}>{t.contact}</button>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
        </div>
      </header>
      {menu && <div className="mobile-menu">{t.nav.map((n,i)=><button key={n} onClick={()=>scrollTo(['home','projects','studio','process','pricing'][i])}>{n}</button>)}</div>}

      <main>
        <section id="home" className="hero">
          <div className="hero-image" />
          <div className="hero-shade" />
          <motion.div className="hero-content" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:1}}>
            <span className="eyebrow light"><i/> {t.heroEyebrow}</span>
            <h1>{t.heroTitle.split('\\n').map((line,i)=><React.Fragment key={i}>{line}{i===0&&<br/>}</React.Fragment>)}</h1>
            <p>{t.heroText}</p>
            <div className="hero-buttons">
              <button className="btn btn-gold" onClick={()=>scrollTo('projects')}>{t.explore}<ArrowUpLeft size={17}/></button>
              <button className="text-link light-link" onClick={()=>scrollTo('contact')}>{t.contact}<ArrowLeft size={16}/></button>
            </div>
          </motion.div>
          <div className="hero-bottom"><span>01 / 04</span><span>RIYADH · SAUDI ARABIA</span><span>SCROLL TO DISCOVER ↓</span></div>
        </section>

        <section className="intro section-pad">
          <div className="intro-kicker"><span className="eyebrow">{t.intro}</span><span className="line"/></div>
          <div className="intro-grid">
            <h2>{t.introTitle.split('\\n').map((line,i)=><React.Fragment key={i}>{line}{i===0&&<br/>}</React.Fragment>)}</h2>
            <div><p>{t.introText}</p><button className="text-link" onClick={()=>scrollTo('process')}>{rtl?'اكتشف طريقتنا':'Discover our process'} <ArrowLeft size={16}/></button></div>
          </div>
        </section>

        <section id="projects" className="projects section-pad">
          <div className="section-heading"><div><span className="eyebrow">{t.works}</span><h2>{t.worksSub}</h2></div><span className="section-count">01 — 03</span></div>
          <div className="project-grid">
            {projects.map((p,i)=><motion.article className={`project-card project-${i}`} key={p.title} whileHover={{y:-7}} transition={{duration:.3}}>
              <div className="project-img"><img src={p.img} alt={p.en} loading="lazy"/><span className="project-number">0{i+1}</span></div>
              <div className="project-meta"><div><h3>{rtl?p.title:p.en}</h3><span>{p.type}</span></div><button onClick={()=>scrollTo('studio')} aria-label="Explore design"><ArrowUpLeft/></button></div>
            </motion.article>)}
          </div>
          <p className="small-note">{rtl?'صور العرض إلهامية، وسيتم استبدالها بصور المشاريع الفعلية المعتمدة.':'Visual references are for inspiration and will be replaced with approved completed-project photography.'}</p>
        </section>

        <section id="studio" className="studio section-pad">
          <div className="studio-heading"><span className="eyebrow light">{t.configure}</span><h2>{t.configureTitle}</h2><p>{t.configureText}</p></div>
          <div className="studio-layout">
            <div className="studio-view"><Kitchen3D cabinet={cabinet} countertop={top}/><div className="studio-label">AL AMMAR · 3D CONCEPT 01</div></div>
            <div className="studio-controls">
              <div className="control-block"><span className="control-title">{t.cabinet}</span><div className="swatches">
                {['walnut','ivory','sage','charcoal','oak'].map(c=><button key={c} className={`swatch ${cabinet===c?'selected':''}`} style={{'--swatch':({walnut:'#76533b',ivory:'#e8e1d5',sage:'#777d70',charcoal:'#303633',oak:'#b58b61'})[c]}} onClick={()=>setCabinet(c)} aria-label={t[c]} title={t[c]}/>)}
              </div><span className="selected-name">{t[cabinet]}</span></div>
              <div className="control-block"><span className="control-title">{t.top}</span><div className="finish-options">
                {['ivory','sand','dark'].map(c=><button key={c} className={top===c?'finish active':'finish'} onClick={()=>setTop(c)}>{t[c==='ivory'?'marble':c]}</button>)}
              </div></div>
              <div className="studio-spec"><span>CONCEPT DETAILS</span><p>{rtl?'نموذج تصوري للتجربة — المقاسات والخامات النهائية تعتمد بعد المعاينة.':'Interactive concept preview — final dimensions and specifications are confirmed after site survey.'}</p></div>
              <button className="btn btn-gold full" onClick={()=>scrollTo('contact')}>{t.request}<ArrowUpLeft size={17}/></button>
            </div>
          </div>
        </section>

        <section id="process" className="process section-pad">
          <div className="process-top"><span className="eyebrow">{t.process}</span><h2>{t.processTitle}</h2><p>{t.processText}</p></div>
          <div className="steps">{t.steps.map(([n,title,desc])=><article className="step" key={n}><span className="step-no">{n}</span><div className="step-icon">{[<MessageCircle/>,<Ruler/>,<Layers3/>,<Sparkles/>][Number(n)-1]}</div><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </section>

        <section id="pricing" className="pricing section-pad">
          <div className="pricing-heading"><span className="eyebrow">{t.pricing}</span><h2>{t.pricingTitle}</h2><p>{t.pricingText}</p></div>
          <div className="price-grid">{t.plans.map(([name,desc,price],i)=><article className={`price-card ${i===1?'featured':''}`} key={name}>
            {i===1&&<span className="popular">{rtl?'اختيار متوازن':'POPULAR CHOICE'}</span>}<span className="price-index">0{i+1}</span><h3>{name}</h3><p>{desc}</p><div className="price">{price}</div><span className="price-unit">{t.per}</span><button className={i===1?'btn btn-dark full':'btn btn-outline full'} onClick={()=>scrollTo('contact')}>{t.request}<ArrowUpLeft size={16}/></button>
          </article>)}</div>
          <p className="pricing-note"><ShieldCheck size={17}/>{t.note}</p>
        </section>

        <section className="trust section-pad">
          <div className="trust-head"><span className="eyebrow light">{t.trust}</span><h2>{t.trustTitle}</h2></div>
          <div className="trust-grid">{t.trustItems.map(([title,desc],i)=><div className="trust-item" key={title}><span>0{i+1}</span><CheckCircle2/><h3>{title}</h3><p>{desc}</p></div>)}</div>
        </section>

        <section className="proof section-pad">
          <div className="proof-copy"><span className="eyebrow">{t.proof}</span><h2>{t.proofTitle}</h2><p>{t.proofText}</p></div>
          <div className="proof-visual"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85" alt="Kitchen interior reference" loading="lazy"/><div className="proof-stamp">AL AMMAR<br/><small>CRAFT & DETAIL</small></div></div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-copy"><span className="eyebrow light">{t.cta}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><a className="contact-whatsapp" href={wa} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp <ArrowUpLeft size={16}/></a><div className="contact-location"><MapPin size={16}/> Saudi Arabia</div></div>
          <form className="contact-form" onSubmit={(e)=>{e.preventDefault();setSent(true);}}>
            <div className="form-row"><label>{t.name}<input required placeholder={rtl?'اكتب اسمك':'Your name'}/></label><label>{t.phone}<input required type="tel" placeholder="+966 5X XXX XXXX"/></label></div>
            <label>{t.city}<select defaultValue="" required><option value="" disabled>{rtl?'اختر المدينة':'Select a city'}</option>{t.cities.map(c=><option key={c}>{c}</option>)}</select></label>
            <label>{t.message}<textarea rows="4" placeholder={rtl?'المساحة التقريبية، الشكل، أو أي تفاصيل مهمة...':'Approximate size, preferred style or other details...'} /></label>
            <button className="btn btn-gold full" type="submit">{sent?(rtl?'تم تسجيل الطلب التجريبي':'Demo request recorded'):t.send}<ArrowUpLeft size={17}/></button>
            {sent&&<small className="form-success">{rtl?'هذا نموذج واجهة تجريبي؛ لم يتم إرسال البيانات بعد. اربطه بخدمة استقبال الطلبات قبل النشر.':'Demo form only; no data has been sent. Connect a form service before launch.'}</small>}
          </form>
        </section>
      </main>
      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">A</span><span><b>AL AMMAR</b><small>KITCHENS & INTERIORS</small></span></a><p>{t.footer}</p><span>© {new Date().getFullYear()} AL AMMAR. {t.rights}</span></footer>
      <a className="floating-wa" href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
    </div>
  );
}
