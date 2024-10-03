importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"98ceab3b3a1a328fa4d6b8b1ff6f26da","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"fb8cb4c8deb020a634a1c77ef1fc798b","url":"contributors.html"},{"revision":"4a7cc48f712cc38bd51ef65961d3b54a","url":"feedback.html"},{"revision":"8b8ead546d15e17c9dd2c2f4ab15d925","url":"images/memory_circuit.png"},{"revision":"dbbe6b37f824e7c3f702fe45c2e06fa4","url":"index.html"},{"revision":"afe16d391ca4502813e9b1dd64cea9a7","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"ff0a7d9f2416348be3279eec6a1bdc1a","url":"posttest.html"},{"revision":"4045e15ab794b086d5cf3b9126fe242f","url":"posttest.json"},{"revision":"02e02db57222dd3ecab0622f9423b84a","url":"pretest.html"},{"revision":"c3ab9b9f4c5948d517b2f0117abfb9af","url":"pretest.json"},{"revision":"f9b8e137e3fa1f62e2b9c7777b1e6965","url":"procedure.html"},{"revision":"180c458c4377a369ef8174bc80def064","url":"references.html"},{"revision":"5ac48811b563aa8ea09d70b9d84556c5","url":"simulation.html"},{"revision":"28ccc26f7ec1706f9b2e868e8175f463","url":"simulation/css/adik.css"},{"revision":"252eeb120a2822d9d496164fa4df2f0f","url":"simulation/css/default.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"9dd93693bea6d01797f21067a32ee9a5","url":"simulation/css/override.css"},{"revision":"64980c02d5b897c4c4e31bf16a387ac9","url":"simulation/css/style.css"},{"revision":"f3a7b3d40230d7f2f0edd9f5c218dc41","url":"simulation/images/3 inp AND gate.png"},{"revision":"cd8d5bdd09039d2d768024988667a80b","url":"simulation/images/image_1.png"},{"revision":"afa860974f5e0415190a7c2227b20369","url":"simulation/images/image_2.png"},{"revision":"1d6fbab0fe5639fc5b91a36ca7d202ee","url":"simulation/images/image_3.png"},{"revision":"367df51867fd0b4ad9e7480cf4a14818","url":"simulation/images/image_4.png"},{"revision":"8b8ead546d15e17c9dd2c2f4ab15d925","url":"simulation/images/memory_circuit.png"},{"revision":"10b99da79147c23c67b151f43b2484ad","url":"simulation/images/RAM cell.png"},{"revision":"3004a683ae3de232461b2eb7a2bd89de","url":"simulation/images/RAM_design_memory.png"},{"revision":"3ba5b2532b2beaf166d1377eae32c9ad","url":"simulation/images/S-R flip flop.png"},{"revision":"127dbdecc64aa37c0ccc52d1f81c4f2e","url":"simulation/images/sim.png"},{"revision":"b443720150be4427dbb7b27ce0a7a3a9","url":"simulation/index.html"},{"revision":"77b6c1a0c1505ac28d55b48993519037","url":"simulation/js/breadboard.js"},{"revision":"20005b8399b69708705172ebefe5e473","url":"simulation/js/canvas.js"},{"revision":"0a4b58ecfb290737645ce535f7c54255","url":"simulation/js/FileSaver.js"},{"revision":"11c05eb286ed576526bf4543760785b9","url":"simulation/js/jquery-3.4.1.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"80910d195a309e4f4ece1022742574bb","url":"simulation/js/menu.js"},{"revision":"af35187c9c5b11809132ef59d2bef00c","url":"simulation/js/modules.js"},{"revision":"0311bbe619e11bdb4bec6fd082316339","url":"simulation/js/nodes.js"},{"revision":"b570a25270a23343a1828ee3ba897b6f","url":"simulation/js/polyfill.js"},{"revision":"217ac71ec2da27213558314a5f6f772f","url":"simulation/js/SimpleLogic.js"},{"revision":"17f7ed721dac6dfe57ef70944fd4a652","url":"simulation/js/utils.js"},{"revision":"e5354aef7bcf8eaae500d7edb97cae4a","url":"simulation/simulator.html"},{"revision":"e9a52d036937ce4c3bcdd04658ad2b2d","url":"theory.html"},{"revision":"64a2f6a75f6463efb2486b5d2300c904","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );