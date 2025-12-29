export type Category = 'React' | 'JavaScript' | 'HTML/CSS';

export type Card = {
  id: string;
  category: Category;
  question: string;
  answer: string;
};

export const DECK: Card[] = [
  // React
  {
    id: 'react-001',
    category: 'React',
    question: "React'te Virtual DOM ne için gereklidir?",
    answer:
      'React UI\'yi önce Virtual DOM (JS ağaç) üzerinde günceller. Sonra eski ağaç ile yenisini karşılaştırır (diff) ve gerçek DOM\'a sadece gerekli minimal değişiklikleri uygular. Amaç: performans ve tutarlılık.'
  },
  {
    id: 'react-002',
    category: 'React',
    question: 'Virtual DOM ile Shadow DOM arasındaki fark nedir?',
    answer:
      'Virtual DOM: React\'in render çıktısını temsil eden JS ağaç (tarayıcı özelliği değil).\nShadow DOM: Web Components standardı; gerçek DOM\'da kapsülleme/izolasyon sağlar (CSS sızıntısını engeller).'
  },
  {
    id: 'react-003',
    category: 'React',
    question: 'State ile props arasındaki fark nedir?',
    answer:
      'Props: parent\'tan gelen, bileşenin dış girdisi (read-only kabul edilir).\nState: bileşenin kendi iç durumu; setState/useState ile güncellenir ve render tetikler.'
  },
  {
    id: 'react-004',
    category: 'React',
    question: 'Sınıf (class) bileşeni ile fonksiyonel bileşen arasındaki fark nedir?',
    answer:
      'Class: this, setState ve lifecycle metodları (componentDidMount vb.).\nFunction: Hooks ile state/side-effect (useState/useEffect). Modern React\'te çoğunlukla function + hooks tercih edilir.'
  },
  {
    id: 'react-005',
    category: 'React',
    question: "React'te yaşam döngüsü (lifecycle) metodları nelerdir?",
    answer:
      'Mounting: constructor, render, componentDidMount\nUpdating: render, componentDidUpdate, shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate\nUnmounting: componentWillUnmount\nError: getDerivedStateFromError, componentDidCatch'
  },
  {
    id: 'react-006',
    category: 'React',
    question: 'Sınıf bileşeninde state nasıl güncellenir?',
    answer:
      'this.setState({ ... }) ile. Önceki state\'e bağlıysa functional kullanım: this.setState(prev => ({count: prev.count + 1})).'
  },
  {
    id: 'react-007',
    category: 'React',
    question: 'Neden setState asenkron bir fonksiyondur?',
    answer:
      'React performans için state güncellemelerini batch eder (birleştirir). Bu yüzden setState sonrası state hemen güncellenmiş görünmeyebilir. Çözüm: functional setState veya setState callback.'
  },
  {
    id: 'react-008',
    category: 'React',
    question: 'Bir bileşenin güncellenmesi için ne yapılmalıdır?',
    answer:
      'State değişmeli (setState/useState), props değişmeli (parent yeni props göndermeli) veya context değeri değişmeli. Class\'ta forceUpdate vardır ama genelde önerilmez.'
  },
  {
    id: 'react-009',
    category: 'React',
    question: 'Gereksiz bileşen güncellemelerini nasıl önleyebiliriz?',
    answer:
      'React.memo, PureComponent/shouldComponentUpdate, useMemo/useCallback ile referans stabilizasyonu, doğru state yerleşimi, büyük listelerde virtualization (react-window) ve gereksiz props değişimini azaltma.'
  },
  {
    id: 'react-010',
    category: 'React',
    question: 'PureComponent nedir ve özellikleri nelerdir?',
    answer:
      'React.PureComponent, props/state için shallow compare yaparak gereksiz render\'ları engeller (otomatik shouldComponentUpdate). Immutability şart; nested objeleri mutasyona uğratırsan kaçırabilir.'
  },
  {
    id: 'react-011',
    category: 'React',
    question: 'Key ne için gereklidir?',
    answer:
      'Listelerde elemanları benzersiz tanıtır; reconciliation sırasında doğru eşleşme sağlar. Yanlış key (özellikle index) reorder/insert/delete durumlarında UI bug\'ı ve yanlış state taşımaya yol açabilir.'
  },
  {
    id: 'react-012',
    category: 'React',
    question: 'Fragment ne için gereklidir?',
    answer:
      'Ekstra DOM node eklemeden birden fazla elemanı sarmalamak için: <></> veya <React.Fragment>.'
  },
  {
    id: 'react-013',
    category: 'React',
    question: 'Portallar ne için kullanılır?',
    answer:
      'Bir bileşeni DOM ağacında başka bir node\'a render eder. Modal/tooltip/dropdown gibi z-index/overflow sorunlarını çözmek için yaygın.'
  },
  {
    id: 'react-014',
    category: 'React',
    question: 'Refs nedir?',
    answer:
      'DOM elemanına veya değer tutan mutable bir kutuya imperative erişim sağlar. Örn: input focus, scroll, ölçüm, third-party entegrasyon. useRef ile kullanılır.'
  },
  {
    id: 'react-015',
    category: 'React',
    question: 'Context nedir? Bir projede kaç tane context olabilir?',
    answer:
      'Props drilling olmadan ağaç boyunca veri taşır (tema, dil, auth). İstediğin kadar context olabilir; pratikte domain bazlı birkaç tane. Sık değişen context değerleri gereksiz render yapabilir.'
  },
  {
    id: 'react-016',
    category: 'React',
    question: 'Render props ne için kullanılır?',
    answer:
      'Bir component\'in UI\'yi nasıl render edeceğini çocuk olarak aldığı fonksiyona devretmesi. Amaç: logic paylaşımı. Hooks sonrası daha az kullanılır.'
  },
  {
    id: 'react-017',
    category: 'React',
    question: "HOC'lar (Higher Order Components) ne için kullanılır?",
    answer:
      'Component alıp yeni bir component döndüren fonksiyonlardır (withX(Component)). Auth, tracking, theme gibi cross-cutting concerns için. Hooks sonrası daha az tercih edilir ama legacy kodlarda var.'
  },
  {
    id: 'react-018',
    category: 'React',
    question: 'Hata yakalayıcı (Error Boundary) bileşeni nasıl oluşturulur?',
    answer:
      'Class component ile: static getDerivedStateFromError ve/veya componentDidCatch kullanılır. Render/lifecycle/child tree hatalarını yakalar; event handler hatalarını yakalamaz.'
  },
  {
    id: 'react-019',
    category: 'React',
    question: "Hook'lar hangi imkanları sağlar? Hangi hook'ları biliyorsunuz?",
    answer:
      'Function component\'te state, side-effect, context, ref ve logic reuse sağlar.\nÖrn: useState, useEffect, useLayoutEffect, useMemo, useCallback, useRef, useReducer, useContext, useId, useTransition, useDeferredValue.'
  },
  {
    id: 'react-020',
    category: 'React',
    question: "Hook kullanımıyla ilgili kurallar nelerdir?",
    answer:
      'Hook\'lar sadece function component veya custom hook içinde çağrılır. Loop/if/try içinde çağrılmaz; en üst seviyede olmalı. Çağrı sırası render\'lar arasında değişmemeli.'
  },
  {
    id: 'react-021',
    category: 'React',
    question: 'useEffect ne için kullanılır?',
    answer:
      'Render sonrası side-effect yönetimi için: data fetch, subscription, event listener, DOM dışı güncellemeler. Cleanup ile kaynak temizliği yapılır.'
  },
  {
    id: 'react-022',
    category: 'React',
    question: 'useEffect ile useLayoutEffect arasındaki fark nedir?',
    answer:
      'useEffect paint sonrası çalışır. useLayoutEffect DOM güncellendikten sonra paint\'ten önce çalışır (ölçüm/ani DOM müdahalesi). useLayoutEffect bloklayabileceği için dikkatli kullanılmalı.'
  },
  {
    id: 'react-023',
    category: 'React',
    question: 'useState ve useReducer\'daki "tembel" (lazy) state başlatma nedir?',
    answer:
      'Pahalı başlangıç hesaplarını her render\'da çalıştırmamak için: useState(() => init()) veya useReducer(reducer, initialArg, initFn). İlk mount\'ta bir kez hesaplanır.'
  },
  {
    id: 'react-024',
    category: 'React',
    question: 'useRef ile createRef arasındaki fark nedir?',
    answer:
      'useRef aynı ref objesini render\'lar arasında korur (function component standardı). createRef her render\'da yeni ref oluşturur (class\'ta sık).'
  },
  {
    id: 'react-025',
    category: 'React',
    question: 'useMemo ve useCallback ne için gereklidir?',
    answer:
      'useMemo: pahalı hesaplamayı memoize eder. useCallback: fonksiyon referansını stabil tutar (özellikle child\'a prop geçerken). Gereksiz kullanmak overhead yaratabilir.'
  },
  {
    id: 'react-026',
    category: 'React',
    question: 'Redux ne için gereklidir? Veri akışı (data flow) nasıldır?',
    answer:
      'Global state\'i tahmin edilebilir şekilde yönetmek için. Akış: UI dispatch(action) → middleware (varsa) → reducer new state (immutable) → store update → UI useSelector ile state\'i alıp render eder.'
  },
  {
    id: 'react-027',
    category: 'React',
    question: 'Redux middleware nedir?',
    answer:
      'dispatch ile reducer arasındaki katmandır. Logging, analytics, async işlemler, side-effect yönetimi için kullanılır (thunk/saga gibi).'
  },
  {
    id: 'react-028',
    category: 'React',
    question: "Redux'ta yan etkiler (side effects) nerede yapılmalıdır?",
    answer:
      'Reducer\'larda asla. Side-effect\'ler middleware\'de (Thunk/Saga/Observable) veya RTK Query gibi data layer çözümlerinde yapılmalıdır.'
  },
  {
    id: 'react-029',
    category: 'React',
    question: "Redux middleware'deki next() fonksiyonu nedir?",
    answer:
      'Middleware zincirinde action\'ı bir sonraki middleware\'e (veya en sonunda reducer\'a) ileten fonksiyondur. next(action) çağrılmazsa action reducer\'a ulaşmaz.'
  },
  {
    id: 'react-030',
    category: 'React',
    question: "Redux seçiciler (selectors) ne için gereklidir?",
    answer:
      'Store\'dan gerekli parçayı seçmek için kullanılır. Component\'i store yapısından izole eder, yeniden kullanılabilir. Memoized selector (reselect) ile gereksiz hesaplama/render azalır.'
  },
  {
    id: 'react-031',
    category: 'React',
    question: 'Action ile action creator arasındaki fark nedir?',
    answer:
      'Action: plain object (type/payload). Action creator: action döndüren fonksiyon. Async action creator (thunk) fonksiyon döndürüp dispatch yapabilir.'
  },

  // JavaScript
  {
    id: 'js-001',
    category: 'JavaScript',
    question: "JavaScript'teki veri türleri nelerdir?",
    answer:
      'Primitive: string, number, boolean, undefined, null, symbol, bigint\nReference: object (array, function, date vb. hepsi object altında).'
  },
  {
    id: 'js-002',
    category: 'JavaScript',
    question: 'NaN nedir?',
    answer:
      'Not-a-Number: sayı beklenen işlemin geçersiz sonucu. NaN !== NaN. Kontrol için Number.isNaN kullanılır.'
  },
  {
    id: 'js-003',
    category: 'JavaScript',
    question: 'null ve undefined arasındaki fark nedir?',
    answer:
      'undefined: değer atanmamış / bulunamadı. null: bilerek boş atanmış değer. typeof null === "object" (tarihsel davranış).'
  },
  {
    id: 'js-004',
    category: 'JavaScript',
    question: 'Sıkı eşitlik (===) ile gevşek eşitlik (==) arasındaki fark nedir?',
    answer:
      '=== type coercion yapmaz. == karşılaştırmadan önce tür dönüşümü yapabilir; sürprizlere açıktır. Genelde === tercih edilir.'
  },
  {
    id: 'js-005',
    category: 'JavaScript',
    question: 'Mantıksal operatörler !, &&, || nasıl çalışır?',
    answer:
      '! boolean tersler. a && b: a falsy ise a döner, değilse b (short-circuit). a || b: a truthy ise a döner, değilse b. Operatörler operandın kendisini döndürebilir.'
  },
  {
    id: 'js-006',
    category: 'JavaScript',
    question: 'use strict nedir ve ne için gereklidir?',
    answer:
      'Strict mode daha katı kurallar getirir: yanlışlıkla global değişken oluşturmayı engeller, bazı sessiz hataları hata yapar, this davranışını sıkılaştırır. ESM\'de çoğu zaman zaten strict\'tir.'
  },
  {
    id: 'js-007',
    category: 'JavaScript',
    question: 'Neden benzer iki nesnenin karşılaştırılması false sonucunu verir?',
    answer:
      'Object karşılaştırması içerikle değil referansla yapılır. {a:1} === {a:1} false çünkü iki farklı referanstır.'
  },
  {
    id: 'js-008',
    category: 'JavaScript',
    question: 'İki nesnenin aynı olup olmadığını nasıl kontrol edebiliriz?',
    answer:
      'Aynı referans mı: obj1 === obj2. İçerik aynı mı: deep equality gerekir (ör. lodash isEqual). JSON.stringify sadece basit durumlarda işe yarar (sıra/undefined/function sorunları).'
  },
  {
    id: 'js-009',
    category: 'JavaScript',
    question: 'Bir nesnenin kopyası nasıl oluşturulur?',
    answer:
      'Shallow copy: {...obj} veya Object.assign({}, obj). Deep copy: structuredClone(obj) (modern) veya özel deep copy (JSON yöntemi sınırlıdır).'
  },
  {
    id: 'js-010',
    category: 'JavaScript',
    question: 'var, let ve const değişkenleri arasındaki fark nedir?',
    answer:
      'var: function scope, hoist edilir, tekrar declare edilebilir. let/const: block scope, TDZ var, tekrar declare edilemez. const: yeniden atama yok (ama object içi mutasyon olabilir).'
  },
  {
    id: 'js-011',
    category: 'JavaScript',
    question: 'Verinin dizi (array) olup olmadığını nasıl öğrenebiliriz?',
    answer:
      'Array.isArray(value) kullanılır.'
  },
  {
    id: 'js-012',
    category: 'JavaScript',
    question: 'Bildiğiniz dizi iterasyon metodları nelerdir?',
    answer:
      'forEach, map, filter, reduce, some, every, find, findIndex, sort, flat, flatMap + for...of (iterasyon).'
  },
  {
    id: 'js-013',
    category: 'JavaScript',
    question: 'Dizileri nasıl birleştirebiliriz?',
    answer:
      'concat veya spread: arr1.concat(arr2) ya da [...arr1, ...arr2].'
  },
  {
    id: 'js-014',
    category: 'JavaScript',
    question: 'Bir elemanın bir dizide olup olmadığını nasıl öğrenebiliriz?',
    answer:
      'includes ile boolean alınır. indexOf ile index bulunur. Object array\'lerinde some(item => ...) sık kullanılır.'
  },
  {
    id: 'js-015',
    category: 'JavaScript',
    question: 'for in döngüsü diziler için kullanılabilir mi? Dezavantajları?',
    answer:
      'Kullanılabilir ama önerilmez: index\'leri string döner, enumerable prototype alanlarını da gezer, sıra beklentisi riskli. Array için for...of/for/map tercih edilir.'
  },
  {
    id: 'js-016',
    category: 'JavaScript',
    question: 'Hoisting (değişken/yükselme) nedir?',
    answer:
      'Declaration\'ların derleme aşamasında scope başına alınmış gibi davranması. var ve function declaration hoist olur (assignment değil).'
  },
  {
    id: 'js-017',
    category: 'JavaScript',
    question: 'var ile tanımlanan değişkene, tanımlanmadan önce erişilirse ne döner?',
    answer:
      'Hata vermez; undefined döner (declaration hoist, assignment hoist olmaz).'
  },
  {
    id: 'js-018',
    category: 'JavaScript',
    question: 'let/const değişkenlerine tanımlanmadan önce erişilirse ne olur?',
    answer:
      'ReferenceError oluşur (Temporal Dead Zone).'
  },
  {
    id: 'js-019',
    category: 'JavaScript',
    question: 'Scope (görünürlük alanı) nedir? Türleri nelerdir?',
    answer:
      'Değişkenlerin erişilebilir olduğu alan. Global, function, block (let/const) ve module scope (ESM) vardır.'
  },
  {
    id: 'js-020',
    category: 'JavaScript',
    question: 'Function Declaration ile Function Expression arasındaki fark nedir?',
    answer:
      'Declaration: function foo(){} hoist olur. Expression: const foo = function(){} değişkene atanır; hoisting davranışı değişkene bağlıdır.'
  },
  {
    id: 'js-021',
    category: 'JavaScript',
    question: 'Callback fonksiyonları nedir?',
    answer:
      'Başka bir fonksiyona argüman olarak verilip daha sonra çağrılan fonksiyon. Timer, event, async akış ve kontrol için kullanılır.'
  },
  {
    id: 'js-022',
    category: 'JavaScript',
    question: 'Arrow fonksiyonları ile normal fonksiyonlar arasındaki fark nedir?',
    answer:
      'Arrow\'un kendi this\'i yoktur (lexical this). arguments yoktur, new ile constructor olmaz. Normal function\'da this çağrı şekline göre belirlenir.'
  },
  {
    id: 'js-023',
    category: 'JavaScript',
    question: 'Arrow fonksiyonları için arguments nesnesinin alternatifi var mı?',
    answer:
      'Rest parametre: (...args) => { }'
  },
  {
    id: 'js-024',
    category: 'JavaScript',
    question: 'Bir fonksiyonu 5 saniye gecikmeli nasıl çalıştırabiliriz?',
    answer:
      'setTimeout(fn, 5000) ile.'
  },
  {
    id: 'js-025',
    category: 'JavaScript',
    question: 'Lexical Environment (leksik çevre) nedir?',
    answer:
      'Bir scope\'un değişken kayıtları ve outer environment referansını tutan yapıdır; scope chain bununla çalışır.'
  },
  {
    id: 'js-026',
    category: 'JavaScript',
    question: 'Global Lexical Environment nedir?',
    answer:
      'En üst seviye lexical environment: global değişkenler ve global object (browser\'da window) burada bulunur.'
  },
  {
    id: 'js-027',
    category: 'JavaScript',
    question: 'Closure (kapatma) nedir? Ne için kullanılır?',
    answer:
      'Fonksiyonun tanımlandığı scope\'taki değişkenlere sonradan erişebilmesidir. Private state, function factory, memoization, event handler\'larda state tutma için kullanılır.'
  },
  {
    id: 'js-028',
    category: 'JavaScript',
    question: 'IIFE nedir?',
    answer:
      'Immediately Invoked Function Expression: (function(){ ... })() veya (()=>{ ... })(). Scope izolasyonu için kullanılırdı.'
  },
  {
    id: 'js-029',
    category: 'JavaScript',
    question: 'Nesne yönelimli programlamanın (OOP) temel prensipleri nelerdir?',
    answer:
      'Encapsulation, Inheritance, Polymorphism, Abstraction.'
  },
  {
    id: 'js-030',
    category: 'JavaScript',
    question: 'this nedir?',
    answer:
      'Fonksiyonun çalışırken bağlı olduğu context. Normal function\'da çağrı şekline göre değişir; arrow fonksiyonlarda lexical this kullanılır.'
  },
  {
    id: 'js-031',
    category: 'JavaScript',
    question: 'Bir fonksiyonun çağrı bağlamını (context) nasıl değiştirebiliriz?',
    answer:
      'call, apply, bind ile: fn.call(ctx, a,b), fn.apply(ctx,[a,b]), const g=fn.bind(ctx).'
  },
  {
    id: 'js-032',
    category: 'JavaScript',
    question: 'bind metodunun döndürdüğü fonksiyonun bağlamı değiştirilebilir mi?',
    answer:
      'Genelde hayır. bind hard bind yapar; sonradan call/apply denesen de bound this baskın olur.'
  },
  {
    id: 'js-033',
    category: 'JavaScript',
    question: 'Arrow fonksiyonlarının çağrı bağlamı değiştirilebilir mi?',
    answer:
      'Hayır. Arrow lexical this kullandığı için call/apply/bind etkilemez.'
  },
  {
    id: 'js-034',
    category: 'JavaScript',
    question: 'Nesnelerin prototipi nedir?',
    answer:
      'Her objenin (çoğunun) [[Prototype]] referansı vardır. Property lookup bulunamazsa prototype chain boyunca aranır.'
  },
  {
    id: 'js-035',
    category: 'JavaScript',
    question: "JavaScript'te prototip miras (prototypal inheritance) nasıl çalışır?",
    answer:
      'Bir property yoksa prototype\'a, orada yoksa onun prototype\'ına bakılır (chain). Object.create(proto) ile belirli bir prototype\'la nesne yaratılır.'
  },
  {
    id: 'js-036',
    category: 'JavaScript',
    question: 'Prototipi olmayan bir nesne nasıl oluşturulur?',
    answer:
      'Object.create(null) ile. (toString/hasOwnProperty gibi özellikler yoktur.)'
  },
  {
    id: 'js-037',
    category: 'JavaScript',
    question: 'Bir özelliğin kendisine mi ait, prototipten mi geldiğini nasıl kontrol ederiz?',
    answer:
      'Object.hasOwn(obj, key) (modern) veya Object.prototype.hasOwnProperty.call(obj, key).'
  },
  {
    id: 'js-038',
    category: 'JavaScript',
    question: 'Bir nesnenin prototip özelliklerini değiştirmeyi nasıl engelleyebiliriz?',
    answer:
      'Objeyi dondurma/kapama: Object.freeze(obj) (değişmez), Object.seal(obj) (ekleme/silme yok). Yeni property eklemeyi engellemek için Object.preventExtensions(obj) da kullanılabilir.'
  },
  {
    id: 'js-039',
    category: 'JavaScript',
    question: 'Constructor function ile class arasındaki fark nedir?',
    answer:
      'class çoğunlukla syntax sugar\'dır; altta prototip tabanlıdır. class\'ta extends/super, constructor ve metod tanımı daha okunaklıdır ve strict davranış varsayılandır.'
  },
  {
    id: 'js-040',
    category: 'JavaScript',
    question: 'Bir metodun bir sınıfın örneğine dahil edilmesi için ne yapmak gerekir?',
    answer:
      'Class içinde metod tanımlarsan prototype\'a eklenir ve instance\'lar kullanır. Her instance\'a özel fonksiyon istersen constructor içinde this.foo = () => {} yaparsın.'
  },
  {
    id: 'js-041',
    category: 'JavaScript',
    question: 'LocalStorage ve SessionStorage nedir?',
    answer:
      'Tarayıcıda string key/value saklar. localStorage kalıcıdır; sessionStorage sekme oturumu boyunca yaşar. Hassas veri saklamak için uygun değildir.'
  },
  {
    id: 'js-042',
    category: 'JavaScript',
    question: 'Promise nedir?',
    answer:
      'Async işlemin gelecekteki sonucunu temsil eder. Durumlar: pending → fulfilled/rejected. then/catch/finally ile yönetilir.'
  },
  {
    id: 'js-043',
    category: 'JavaScript',
    question: 'Promise.all ve Promise.race ne için kullanılır?',
    answer:
      'Promise.all: hepsi resolve olursa sonuç array\'i; biri reject olursa hemen reject. Promise.race: ilk tamamlanan (resolve/reject) promise\'in sonucunu döner.'
  },
  {
    id: 'js-044',
    category: 'JavaScript',
    question: 'async/await nedir ve ne için gereklidir?',
    answer:
      'Promise tabanlı async kodu daha okunur hale getirir. async fonksiyon promise döner; await bir promise\'in sonucunu bekler (event loop çalışmaya devam eder).'
  },
  {
    id: 'js-045',
    category: 'JavaScript',
    question: 'async/await içinde hataları nasıl ele alırız?',
    answer:
      'try/catch ile: try { await ... } catch(e) { ... } veya çağıran tarafta .catch().'
  },
  {
    id: 'js-046',
    category: 'JavaScript',
    question: 'Event loop nedir?',
    answer:
      'JS tek thread\'dir. Call stack boşalınca task/microtask kuyruklarından işleri sırayla alır. Promise callback\'leri genelde microtask\'tır; timer/event\'ler task kuyruğundadır.'
  },
  {
    id: 'js-047',
    category: 'JavaScript',
    question: 'CRUD nedir?',
    answer:
      'Create, Read, Update, Delete: temel veri işlemleri. REST\'te kabaca POST/GET/PATCH(or PUT)/DELETE ile eşleşir.'
  },

  // HTML/CSS
  {
    id: 'html-001',
    category: 'HTML/CSS',
    question: 'DOCTYPE nedir ve ne için gereklidir? Eğer belirtilmezse ne olur?',
    answer:
      '<!DOCTYPE html> belgenin HTML5 olduğunu belirtir ve tarayıcının standards mode\'da render etmesini sağlar. Belirtilmezse quirks mode\'a düşüp box model/layout gibi konularda farklı davranışlar görülebilir.'
  },
  {
    id: 'html-002',
    category: 'HTML/CSS',
    question: 'Meta etiketleri ne için gereklidir?',
    answer:
      'Belge meta bilgisini verir: charset, viewport, description/robots (SEO), Open Graph/Twitter card (sosyal paylaşım) vb.'
  },
  {
    id: 'html-003',
    category: 'HTML/CSS',
    question: 'Blok eleman ile satır içi eleman arasındaki fark nedir?',
    answer:
      'Block: yeni satırdan başlar, genelde satırı kaplar (div, p). Inline: satır içinde akar, içeriği kadar yer kaplar (span, a). inline-block ara çözüm sunar.'
  },
  {
    id: 'html-004',
    category: 'HTML/CSS',
    question: 'Neden bazı karakterler sayfada kare kutular olarak görüntülenebilir?',
    answer:
      'Genelde font glyph desteği yoktur veya encoding/charset hatalıdır. Font yüklenmemiş olabilir; doğru UTF-8 ve uygun font/fallback gerekir.'
  },
  {
    id: 'html-005',
    category: 'HTML/CSS',
    question: 'Semantik biçimlendirme nedir? Hangi semantik etiketleri biliyorsunuz?',
    answer:
      'Etiketleri görünüşe göre değil anlama göre seçmek. Örn: header, nav, main, section, article, aside, footer, figure, figcaption, time, address, h1-h6, p, strong, em.'
  },
  {
    id: 'html-006',
    category: 'HTML/CSS',
    question: "HTML'de hangi başlık türleri vardır?",
    answer:
      'h1, h2, h3, h4, h5, h6 (hiyerarşik başlıklar).'
  },
  {
    id: 'html-007',
    category: 'HTML/CSS',
    question: "HTML'de belge akışı (document flow) nedir? Değiştirilebilir mi?",
    answer:
      'Elementlerin varsayılan dizilimi (block alt alta, inline yan yana). position, float, flex, grid, transform gibi yöntemlerle akış ve yerleşim değiştirilebilir.'
  },
  {
    id: 'html-008',
    category: 'HTML/CSS',
    question: "JavaScript'i HTML sayfasına bağlamanın yöntemleri ve farkları nelerdir?",
    answer:
      'Inline (onclick=), internal <script>, external <script src>. Normal script parsing\'i bloklar. defer: parsing biterken sırayla çalışır. async: indirince çalışır, sıra garanti değil.'
  },
  {
    id: 'html-009',
    category: 'HTML/CSS',
    question: "CSS'i bir sayfaya eklemenin yolları nelerdir?",
    answer:
      'Inline style, <style> içinde internal, <link> ile external. Modern projelerde build step (Tailwind/CSS-in-JS) ile de eklenebilir.'
  },
  {
    id: 'html-010',
    category: 'HTML/CSS',
    question: 'Reset.css ve normalize.css arasındaki fark nedir?',
    answer:
      'Reset default stilleri sıfırlar. Normalize defaultları tamamen silmez; tarayıcılar arası tutarsızlıkları normalize eder.'
  },
  {
    id: 'html-011',
    category: 'HTML/CSS',
    question: 'Critical CSS nedir?',
    answer:
      'İlk ekranda görünen içerik için gerekli minimum CSS\'i inline verip ilk render\'ı hızlandırma tekniği (FCP/LCP iyileştirme).'
  },
  {
    id: 'html-012',
    category: 'HTML/CSS',
    question: "CSS'de seçicilerin özgüllüğü (specificity) nedir?",
    answer:
      'Çakışan stillerde hangi kuralın kazanacağını belirleyen skor. Genel güç: !important > inline > #id > .class/[attr]/:pseudo-class > tag/::pseudo-element. Eşitse son yazılan kazanır.'
  },
  {
    id: 'html-013',
    category: 'HTML/CSS',
    question: "CSS'de psödo-sınıf ile psödo-eleman arasındaki fark nedir?",
    answer:
      ':hover/:focus/:nth-child gibi pseudo-class elementin durumu/konumu. ::before/::after/::first-line gibi pseudo-element elementin bir parçasını temsil eder.'
  },
  {
    id: 'html-014',
    category: 'HTML/CSS',
    question: "CSS blok modeli (box model) nedir?",
    answer:
      'content + padding + border + margin katmanları. Toplam yerleşimde margin de etkiler; box boyutu padding/border ile değişebilir.'
  },
  {
    id: 'html-015',
    category: 'HTML/CSS',
    question: 'Box-sizing özelliği ne işe yarar?',
    answer:
      'content-box: width sadece content. border-box: width içine padding+border dahil olur; layout daha öngörülebilir olur.'
  },
  {
    id: 'html-016',
    category: 'HTML/CSS',
    question: 'Sayfadaki öğeleri konumlandırmanın yöntemleri nelerdir?',
    answer:
      'Normal flow, position (relative/absolute/fixed/sticky), flex, grid, float (legacy), transform translate, margin/padding hizalama.'
  },
  {
    id: 'html-017',
    category: 'HTML/CSS',
    question: 'z-index özelliği ne işe yarar?',
    answer:
      'Stacking order\'ı belirler. Stacking context içinde çalışır; position/z-index, transform, opacity<1 gibi şeyler yeni stacking context oluşturabilir.'
  },
  {
    id: 'html-018',
    category: 'HTML/CSS',
    question: 'px, em ve rem arasındaki fark nedir?',
    answer:
      'px sabit. em bulunduğu elementin font-size\'ına göre relatif (iç içe büyüyebilir). rem root(html) font-size\'a göre relatif, daha öngörülebilir.'
  },
  {
    id: 'html-019',
    category: 'HTML/CSS',
    question: 'Fluid, adaptive ve responsive tasarım nedir? Farkları?',
    answer:
      'Fluid: yüzde/vw gibi akışkan ölçülerle ölçeklenir. Adaptive: belirli breakpoint\'lerde farklı sabit layout\'lara geçer. Responsive: fluid + media query + esnek görseller ile tüm aralıklara uyum sağlar.'
  },
  {
    id: 'html-020',
    category: 'HTML/CSS',
    question: 'visibility:hidden ve display:none arasındaki fark nedir?',
    answer:
      'visibility:hidden görünmez yapar ama yer kaplar. display:none element\'i layout\'tan çıkarır, yer kaplamaz.'
  },
  {
    id: 'html-021',
    category: 'HTML/CSS',
    question: 'Repaint ve reflow nedir?',
    answer:
      'Reflow (layout): boyut/konum yeniden hesaplanır (pahalı). Repaint: görünüm yeniden boyanır. Reflow çoğu zaman repaint\'i tetikler.'
  },
  {
    id: 'html-022',
    category: 'HTML/CSS',
    question: 'Bağıl (relative) ve mutlak (absolute) arasındaki fark nedir?',
    answer:
      'position: relative normal akışta kalır, offset uygular; ayrıca absolute child\'a referans olabilir. position: absolute akıştan çıkar, en yakın positioned ancestor\'a göre konumlanır.'
  },
  {
    id: 'html-023',
    category: 'HTML/CSS',
    question: 'Etiket (tag) ve öğe (element) arasındaki fark nedir?',
    answer:
      'Tag: HTML yazdığın şey (<p>). Element: DOM\'daki gerçek düğüm (açılış + içerik + kapanış).' 
  },
  {
    id: 'html-024',
    category: 'HTML/CSS',
    question: '<div> ve <span> etiketlerini ne zaman kullanırsınız?',
    answer:
      'Semantik bir etiket yoksa “son çare” wrapper: div block konteyner, span inline sarmalayıcı. Önce header/nav/section/article/button gibi semantik etiketler tercih edilir.'
  },
  {
    id: 'html-025',
    category: 'HTML/CSS',
    question: 'Butonlar için type özelliği ne işe yarar?',
    answer:
      'Form içinde kritiktir: submit (default) form gönderir; button sadece tık davranışı; reset formu sıfırlar. Yanlışlıkla submit olmaması için form içinde genelde type="button" yazılır.'
  },
  {
    id: 'html-026',
    category: 'HTML/CSS',
    question: 'Checkbox ve radio arasındaki fark nedir?',
    answer:
      'Checkbox çoklu seçim içindir. Radio aynı name grubunda tek seçim içindir.'
  },
  {
    id: 'html-027',
    category: 'HTML/CSS',
    question: 'CSS’de inheritance ve cascading nedir?',
    answer:
      'Inheritance: bazı özellikler child\'a otomatik geçer (color, font-family). Cascading: çakışan stillerde kazananı importance + origin + specificity + source order ile belirleyen sistem.'
  },
  {
    id: 'html-028',
    category: 'HTML/CSS',
    question: 'İçerik görselleri ile dekoratif görseller arasındaki fark nedir?',
    answer:
      'İçerik görseli anlam taşır: img + doğru alt gerekir. Dekoratif sadece süstür: CSS background veya alt="" kullanılır (screen reader gereksiz okumaz).'
  },
  {
    id: 'html-029',
    category: 'HTML/CSS',
    question: 'Neden <img> ve <input> etiketlerinde ::before ve ::after yoktur?',
    answer:
      'Bunlar replaced elementtir; içerik modeli tarayıcı tarafından “yerine konur”. ::before/::after elementin içerik modeline eklenir; replaced elementlerde bu sınırlıdır/çalışmaz.'
  },
  {
    id: 'html-030',
    category: 'HTML/CSS',
    question: 'Flex-container ve flex-eleman nedir?',
    answer:
      'display:flex verilen ebeveyn flex-container, içindeki direkt çocuklar flex-item\'dır. Hizalama/direction/wrap kuralları container üzerinden yönetilir.'
  },
  {
    id: 'html-031',
    category: 'HTML/CSS',
    question: 'Flex ekseni (flex-axis) nedir?',
    answer:
      'Main axis flex-direction ile belirlenir (row yatay, column dikey). Cross axis main\'e diktir. justify-content main axis\'i, align-items cross axis\'i hizalar.'
  },
  {
    id: 'html-032',
    category: 'HTML/CSS',
    question: 'SVG’nin PNG/JPEG’e göre avantajları nelerdir?',
    answer:
      'Vektöreldir: kalite kaybetmeden ölçeklenir. İkon/logo\'larda genelde daha küçük ve CSS ile renklendirilebilir/animasyon yapılabilir. Fotoğraflarda PNG/JPEG daha uygundur.'
  }
];
