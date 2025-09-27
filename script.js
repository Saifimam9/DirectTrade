// --- Mock Data ---
    const MOCK = [
      {id:1,title:'iPhone 14 Pro (256GB) • Deep Purple',price:89999,city:'Delhi',type:'Buy Now',cond:'Like New',desc:'2 months old, warranty, all accessories',img:'https://images.unsplash.com/photo-1632661674596-618c8f2dad8c?auto=format&w=500&h=500&fit=crop'},
      {id:2,title:'Hero Splendor 2016',price:32000,city:'Bengaluru',type:'Auction',cond:'Fair',desc:'Runs great, RC available',img:'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&w=500&h=500&fit=crop'},
      {id:3,title:'MacBook Air M2 (2023)',price:94999,city:'Mumbai',type:'Buy Now',cond:'Like New',desc:'16GB/512GB, Space Gray, AppleCare+',img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=500&h=500&fit=crop'},
      {id:4,title:'IKEA MALM Desk',price:6500,city:'Delhi',type:'Buy Now',cond:'Good',desc:'White, 140x65cm, with drawer unit',img:'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&w=500&h=500&fit=crop'},
      {id:5,title:'Sony A7 III + 28-70mm',price:125999,city:'Hyderabad',type:'Auction',cond:'Like New',desc:'Shutter count 5k, extra battery',img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&w=500&h=500&fit=crop'},
      {id:6,title:'PS5 Digital + 3 games',price:35999,city:'Pune',type:'Buy Now',cond:'Good',desc:'2 DualSense controllers, warranty',img:'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&w=500&h=500&fit=crop'},
      {id:7,title:'Ather 450X (2023)',price:98000,city:'Chennai',type:'Auction',cond:'Good',desc:'3000km, extended warranty',img:'https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?auto=format&w=500&h=500&fit=crop'},
      {id:8,title:'Rare Coin Collection',price:12999,city:'Kolkata',type:'Auction',cond:'Good',desc:'British India, 25+ coins certified',img:'https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&w=500&h=500&fit=crop'},
      {id:9,title:'Samsung S23 Ultra',price:84999,city:'Mumbai',type:'Buy Now',cond:'Like New',desc:'512GB, Green, Samsung Care+',img:'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?auto=format&w=500&h=500&fit=crop'},
      {id:10,title:'iPad Pro 12.9" M2',price:82999,city:'Bengaluru',type:'Buy Now',cond:'Like New',desc:'256GB, WiFi, Apple Pencil included',img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&w=500&h=500&fit=crop'},
      {id:11,title:'Royal Enfield Classic 350',price:145000,city:'Delhi',type:'Buy Now',cond:'Good',desc:'2022, 8000km, Signals Edition',img:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&w=500&h=500&fit=crop'},
      {id:12,title:'LG C2 65" OLED TV',price:125999,city:'Chennai',type:'Buy Now',cond:'Like New',desc:'6 months old, extended warranty',img:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&w=500&h=500&fit=crop'},
      {id:13,title:'Antique Teak Dining Set',price:45999,city:'Hyderabad',type:'Auction',cond:'Good',desc:'6 chairs, 100+ years old',img:'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&w=500&h=500&fit=crop'},
      {id:14,title:'DJI Mini 3 Pro',price:65999,city:'Pune',type:'Buy Now',cond:'Like New',desc:'Fly More combo, ND filters',img:'https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&w=500&h=500&fit=crop'},
      {id:15,title:'Leica Q2',price:375000,city:'Delhi',type:'Buy Now',cond:'Like New',desc:'Full box, extra battery, case',img:'https://images.unsplash.com/photo-1606986644837-6785d62be74e?auto=format&w=500&h=500&fit=crop'},
      {id:16,title:'Yamaha Digital Piano',price:54999,city:'Mumbai',type:'Buy Now',cond:'Good',desc:'P-515, wooden stand included',img:'https://images.unsplash.com/photo-1595069906974-f8ae7ffc3e7a?auto=format&w=500&h=500&fit=crop'},
      {id:17,title:'Gaming PC RTX 4080',price:185999,city:'Bengaluru',type:'Buy Now',cond:'Like New',desc:'i9 13900K, 32GB DDR5, 2TB',img:'https://images.unsplash.com/photo-1587831741946-8405d6cdf865?auto=format&w=500&h=500&fit=crop'},
      {id:18,title:'Trek Marlin 7 MTB',price:52999,city:'Chennai',type:'Auction',cond:'Good',desc:'2023 model, upgraded tires',img:'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&w=500&h=500&fit=crop'},
      {id:19,title:'Vintage Watch Collection',price:95999,city:'Kolkata',type:'Auction',cond:'Good',desc:'HMT, Seiko, Citizen (1970-90s)',img:'https://images.unsplash.com/photo-1619946928632-abefa12506e2?auto=format&w=500&h=500&fit=crop'},
      {id:20,title:'Herman Miller Aeron',price:85999,city:'Delhi',type:'Buy Now',cond:'Like New',desc:'Size B, PostureFit SL, 2023',img:'https://images.unsplash.com/photo-1592781959802-5115942415d5?auto=format&w=500&h=500&fit=crop'}
    ];

    let page = 1;

    function placeholder(imgUrl, title) {
      // Fallback images by category
      const fallbacks = {
        'iPhone': 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&w=500&h=500&fit=crop',
        'MacBook': 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&w=500&h=500&fit=crop',
        'iPad': 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&w=500&h=500&fit=crop',
        'Samsung': 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&w=500&h=500&fit=crop',
        'Royal': 'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&w=500&h=500&fit=crop',
        'PS5': 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&w=500&h=500&fit=crop',
        'TV': 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&w=500&h=500&fit=crop',
        'Gaming': 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&w=500&h=500&fit=crop',
        'Leica': 'https://images.unsplash.com/photo-1621522223435-886638f0a726?auto=format&w=500&h=500&fit=crop',
        'Sony': 'https://images.unsplash.com/photo-1621522223430-0e7e245ca20f?auto=format&w=500&h=500&fit=crop',
        'Desk': 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&w=500&h=500&fit=crop',
        'Chair': 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&w=500&h=500&fit=crop',
        'Watch': 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&w=500&h=500&fit=crop',
        'Piano': 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&w=500&h=500&fit=crop',
        'default': 'https://images.unsplash.com/photo-1580719653258-28d6efd2563d?auto=format&w=500&h=500&fit=crop'
      };

      // Find matching fallback image
      let fallbackUrl = fallbacks.default;
      for (const [key, value] of Object.entries(fallbacks)) {
        if (title.includes(key)) {
          fallbackUrl = value;
          break;
        }
      }

      return `<div style="height:240px;border-radius:10px 10px 0 0;overflow:hidden;position:relative;background:#f1f5f9;">
        <img src="${imgUrl || fallbackUrl}" alt="${title}" 
          style="width:100%;height:100%;object-fit:cover;transition:transform 0.3s;" 
          onmouseover="this.style.transform='scale(1.05)'" 
          onmouseout="this.style.transform='scale(1)'"
          onerror="this.onerror=null;this.src='${fallbackUrl}';"
        />
        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 40%);pointer-events:none;"></div>
      </div>`
    }
    

    function badge(type){
      const bg = type === 'Auction' ? '#fee2e2' : '#dcfce7';
      const fg = type === 'Auction' ? '#b91c1c' : '#166534';
      return `<span style="background:${bg};color:${fg};border:1px solid rgba(0,0,0,0.06);padding:4px 8px;border-radius:999px;font-size:11px;font-weight:700;">${type}</span>`
    }

    // Add responsive styles
    const styles = `
      @media (max-width: 768px) {
        .product-card {
          margin-bottom: 10px;
        }
        .product-image {
          height: 200px !important;
        }
        .product-title {
          font-size: 14px !important;
        }
        .product-price {
          font-size: 16px !important;
        }
        .product-location {
          font-size: 12px !important;
        }
        .product-buttons {
          flex-direction: column !important;
          padding: 10px !important;
        }
        .product-button {
          width: 100% !important;
          margin: 5px 0 !important;
        }
      }
    `;

    // Add styles to document if not already added
    if (!document.getElementById('responsiveStyles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'responsiveStyles';
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }

    function card(item){
      // Default image by category if the main image fails
      const defaultImages = {
        'phone': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=500&h=500&fit=crop',
        'bike': 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&w=500&h=500&fit=crop',
        'laptop': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&w=500&h=500&fit=crop',
        'camera': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&w=500&h=500&fit=crop',
        'furniture': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&w=500&h=500&fit=crop'
      };

      return `<article style=\"background:#fff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;display:flex;flex-direction:column;transition:transform 0.2s,box-shadow 0.2s;cursor:pointer;\" onmouseover=\"this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 24px rgba(0,0,0,0.1)';\" onmouseout=\"this.style.transform='none';this.style.boxShadow='none';\">
        <div onclick="openProductModal(${item.id})" style="cursor:pointer;">
          ${placeholder(item.img, item.title)}
          <div style=\"padding:16px;display:grid;gap:10px;\">
            <div style=\"display:flex;justify-content:space-between;align-items:start;gap:8px;\">
              <strong style=\"font-size:15px;line-height:1.3;color:#0f172a;font-weight:600;\">${item.title}</strong>
              ${badge(item.type)}
            </div>
            <div style=\"display:flex;justify-content:space-between;align-items:center;\">
              <div>
                <span style=\"font-weight:800;font-size:18px;color:#0f172a;\">₹${item.price.toLocaleString('en-IN')}</span>
                <div style=\"font-size:13px;color:#64748b;margin-top:4px;\">${item.cond} • ${item.city}</div>
              </div>
            </div>
            <p style=\"margin:0;color:#475569;font-size:13px;line-height:1.5;\">${item.desc}</p>
          </div>
        </div>
        <div style=\"display:flex;gap:8px;margin:0 16px 16px;;\">
          <button onclick=\"openChatModal(${item.id})\" style=\"flex:1;background:#0ea5e9;border:1px solid #0284c7;color:#fff;border-radius:10px;padding:10px;font-weight:600;cursor:pointer;transition:all 0.2s;\" onmouseover=\"this.style.background='#0284c7';this.style.transform='translateY(-1px)'\" onmouseout=\"this.style.background='#0ea5e9';this.style.transform='none'\">Chat</button>
          <button onclick=\"openProductModal(${item.id})\" style=\"flex:1;background:#fff;border:1px solid #e2e8f0;color:#0f172a;border-radius:10px;padding:10px;font-weight:600;cursor:pointer;transition:all 0.2s;\" onmouseover=\"this.style.background='#f1f5f9';this.style.transform='translateY(-1px)'\" onmouseout=\"this.style.background='#fff';this.style.transform='none'\">View</button>
        </div>
      </article>`
    }

    function renderCards(){
      const grid = document.getElementById('grid');
      const sort = document.getElementById('sort').value;
      let items = [...MOCK];
      if(sort==='price_low') items.sort((a,b)=>a.price-b.price);
      if(sort==='price_high') items.sort((a,b)=>b.price-a.price);
      // simple filter demo
      const minp = parseInt(document.getElementById('minp')?.value||'0',10);
      const maxp = parseInt(document.getElementById('maxp')?.value||'0',10);
      const cond = document.getElementById('cond')?.value||'Any';
      const type = document.getElementById('type')?.value||'Any';
      items = items.filter(it=>{
        const inMin = !minp || it.price>=minp;
        const inMax = !maxp || it.price<=maxp;
        const inCond = cond==='Any' || it.cond===cond;
        const inType = type==='Any' || it.type===type;
        return inMin && inMax && inCond && inType;
      });
      grid.innerHTML = items.map(card).join('');
    }

    function loadMore(){
      alert('Demo: would fetch next page from API');
    }

    function doSearch(){
      const q = document.getElementById('searchInput').value.trim();
      alert(q?`Demo search for: ${q}`:'Enter a search term');
    }

    function toggleFilters(){
      const el = document.getElementById('filters');
      el.style.display = el.style.display === 'none' ? 'flex' : 'none';
    }

    function applyFilters(){
      renderCards();
    }

    function scrollToListings(){
      document.getElementById('listings').scrollIntoView({behavior:'smooth'});
    }

    function openAuth(){
      alert('Demo: open sign-in (OTP/Email/Google)');
    }

    function openPostModal(){
      console.log('Opening modal...');
      const modal = document.getElementById('postModal');
      document.body.style.overflow = 'hidden';  // Prevent background scrolling
      modal.style.display = 'flex';
      // Reset form
      if (document.getElementById('imagePreview')) {
        document.getElementById('imagePreview').style.display = 'none';
      }
      if (document.getElementById('uploadPrompt')) {
        document.getElementById('uploadPrompt').style.display = 'block';
      }
      if (document.getElementById('f_image')) {
        document.getElementById('f_image').value = '';
      }
    }
    
    function closePostModal(){
      console.log('Closing modal...');
      const modal = document.getElementById('postModal');
      document.body.style.overflow = '';  // Restore scrolling
      modal.style.display = 'none';
    }
    function saveAd(){
      const title = document.getElementById('f_title').value.trim();
      const price = document.getElementById('f_price').value;
      const type = document.getElementById('f_type').value;
      const cond = document.getElementById('f_cond').value;
      const city = document.getElementById('f_city').value;
      if(!title||!price){alert('Please fill the required fields');return}
      alert(`Saved draft:\n${title} — ₹${price}\n${type} • ${cond} • ${city}`);
      closePostModal();
    }

    // Image preview handling
    function previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('preview').src = e.target.result;
          document.getElementById('imagePreview').style.display = 'block';
          document.getElementById('uploadPrompt').style.display = 'none';
        }
        reader.readAsDataURL(file);
      }
    }

    // Drag and drop handling
    const dropzone = document.getElementById('imageDropzone');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
      dropzone.style.borderColor = '#0ea5e9';
      dropzone.style.backgroundColor = '#f0f9ff';
    }

    function unhighlight(e) {
      dropzone.style.borderColor = '#e2e8f0';
      dropzone.style.backgroundColor = '#f8fafc';
    }

    dropzone.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
      const dt = e.dataTransfer;
      const file = dt.files[0];
      const fileInput = document.getElementById('f_image');
      fileInput.files = dt.files;
      previewImage({target: {files: [file]}});
    }

    // Post mode handling
    let currentMode = 'custom';
    const randomTitles = [
      'Vintage Collection', 'Rare Find', 'Must See', 'Great Deal', 
      'Limited Edition', 'Classic Piece', 'Special Item', 'Unique Treasure'
    ];
    const randomDescs = [
      'Check out the photos!', 'Contact for more details', 'Great condition',
      'One of a kind find', 'Serious inquiries only', 'Must see to appreciate'
    ];
    const randomPrices = [999, 1499, 2999, 4999, 9999, 14999, 19999, 24999];

    function togglePostMode(mode) {
      currentMode = mode;
      document.getElementById('customBtn').style.background = mode === 'custom' ? '#f1f5f9' : '#fff';
      document.getElementById('randomBtn').style.background = mode === 'random' ? '#f1f5f9' : '#fff';
      document.getElementById('customFields').style.display = mode === 'custom' ? 'block' : 'none';
      document.getElementById('randomFields').style.display = mode === 'random' ? 'block' : 'none';
    }

    function getRandomItem(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function saveAd() {
      const imageFile = document.getElementById('f_image').files[0];
      if (!imageFile) {
        alert('Please add at least one photo of your item');
        return;
      }

      let title, desc, price, type, cond, city;

      if (currentMode === 'random') {
        const randomName = document.getElementById('f_random_name').value.trim();
        if (!randomName) {
          alert('Please enter your name for the random category post');
          return;
        }
        title = `${randomName}'s ${getRandomItem(randomTitles)}`;
        desc = getRandomItem(randomDescs);
        price = getRandomItem(randomPrices);
        type = Math.random() > 0.5 ? 'Buy Now' : 'Auction';
        cond = getRandomItem(['New', 'Like New', 'Good', 'Fair']);
        city = getRandomItem(['Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune']);
      } else {
        title = document.getElementById('f_title').value.trim() || 'Untitled Item';
        desc = document.getElementById('f_desc').value.trim() || 'No description provided';
        price = document.getElementById('f_price').value || getRandomItem(randomPrices);
        type = document.getElementById('f_type').value === 'random' ? 
               (Math.random() > 0.5 ? 'Buy Now' : 'Auction') : 
               document.getElementById('f_type').value;
        cond = document.getElementById('f_cond').value === 'random' ? 
               getRandomItem(['New', 'Like New', 'Good', 'Fair']) : 
               document.getElementById('f_cond').value;
        city = document.getElementById('f_city').value === 'random' ? 
               getRandomItem(['Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune']) : 
               document.getElementById('f_city').value;
      }

      alert(`Ad Posted!\n${title}\n₹${price}\n${type} • ${cond} • ${city}\n\n${desc}`);
      closePostModal();
    }

    // Auth Modal Functions
    function openSignInModal() {
      const modal = document.getElementById('signInModal');
      document.body.style.overflow = 'hidden';
      modal.style.display = 'block';
    }

    function closeSignInModal() {
      const modal = document.getElementById('signInModal');
      document.body.style.overflow = '';
      modal.style.display = 'none';
    }

    function openSignUpModal() {
      const modal = document.getElementById('signUpModal');
      document.body.style.overflow = 'hidden';
      modal.style.display = 'block';
    }

    function closeSignUpModal() {
      const modal = document.getElementById('signUpModal');
      document.body.style.overflow = '';
      modal.style.display = 'none';
    }

    function switchToSignUp() {
      closeSignInModal();
      openSignUpModal();
    }

    function switchToSignIn() {
      closeSignUpModal();
      openSignInModal();
    }

    function handleSignIn() {
      const email = document.getElementById('signInEmail').value;
      const password = document.getElementById('signInPassword').value;
      // Demo: Would handle authentication here
      alert(`Demo: Sign in with ${email}`);
      closeSignInModal();
    }

    function handleSignUp() {
      const name = document.getElementById('signUpName').value;
      const email = document.getElementById('signUpEmail').value;
      const password = document.getElementById('signUpPassword').value;
      // Demo: Would handle registration here
      alert(`Demo: Sign up ${name} with ${email}`);
      closeSignUpModal();
    }

    // Chat & Product Modal Functions
    function openChatModal(productId) {
      const product = MOCK.find(p => p.id === productId);
      if (!product) return;
      
      const chatProductImg = document.getElementById('chatProductImage');
      chatProductImg.src = product.img;
      chatProductImg.onerror = function() {
        this.onerror = null;
        this.src = getFallbackImage(product.title);
      };
      
      document.getElementById('chatProductName').textContent = product.title;
      document.getElementById('chatProductPrice').textContent = product.price.toLocaleString('en-IN');
      document.getElementById('chatProductCategory').textContent = product.title.split(' ')[0];
      document.getElementById('chatProductDesc').textContent = product.desc;
      
      document.getElementById('chatModal').style.display = 'block';
      document.body.style.overflow = 'hidden';

      // Clear chat input and scroll to bottom
      document.getElementById('chatInput').value = '';
      const chatBox = document.getElementById('chat-box');
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function closeChatModal() {
      document.getElementById('chatModal').style.display = 'none';
      document.body.style.overflow = '';
    }

    function sendMessage() {
      const input = document.getElementById('chatInput');
      const message = input.value.trim();
      if (!message) return;

      const chatBox = document.getElementById('chat-box');
      chatBox.innerHTML += `
        <div style="margin-bottom:10px;text-align:right;">
          <div style="background:#0ea5e9;color:white;padding:10px 15px;border-radius:15px;display:inline-block;max-width:70%;">
            ${message}
          </div>
        </div>
      `;
      input.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Product-specific fallback images
    const productFallbacks = {
      'iPhone': 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&w=500&h=500&fit=crop',
      'MacBook': 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&w=500&h=500&fit=crop',
      'iPad': 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&w=500&h=500&fit=crop',
      'Samsung': 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&w=500&h=500&fit=crop',
      'Royal': 'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&w=500&h=500&fit=crop',
      'PS5': 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&w=500&h=500&fit=crop',
      'TV': 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&w=500&h=500&fit=crop',
      'Gaming': 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&w=500&h=500&fit=crop',
      'default': 'https://images.unsplash.com/photo-1580719653258-28d6efd2563d?auto=format&w=500&h=500&fit=crop'
    };

    function getFallbackImage(title) {
      for (const [key, value] of Object.entries(productFallbacks)) {
        if (title.includes(key)) {
          return value;
        }
      }
      return productFallbacks.default;
    }

    function openProductModal(productId) {
      const product = MOCK.find(p => p.id === productId);
      if (!product) return;

      const fallbackImg = getFallbackImage(product.title);

      // Update modal content
      document.getElementById('modalProductTitle').textContent = product.title;
      
      const productImg = document.getElementById('modalProductImage');
      productImg.src = product.img;
      productImg.onerror = function() {
        this.onerror = null;
        this.src = fallbackImg;
      };

      document.getElementById('modalProductLocation').textContent = product.city;
      document.getElementById('modalProductPrice').textContent = product.price.toLocaleString('en-IN');
      document.getElementById('modalProductDesc').textContent = product.desc;

      // Generate similar products (demo: show 3 random other products from same category)
      const category = product.title.split(' ')[0];
      const similar = MOCK
        .filter(p => p.id !== productId && p.title.includes(category))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      // If not enough similar products in same category, add random products
      while (similar.length < 3) {
        const randomProduct = MOCK[Math.floor(Math.random() * MOCK.length)];
        if (!similar.includes(randomProduct) && randomProduct.id !== productId) {
          similar.push(randomProduct);
        }
      }

      document.getElementById('similarProducts').innerHTML = similar.map(p => `
        <div onclick="openProductModal(${p.id})" style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:12px;text-align:center;cursor:pointer;">
          <img src="${p.img}" 
               style="width:100%;height:150px;object-fit:cover;border-radius:8px;margin-bottom:8px;" 
               onerror="this.onerror=null;this.src='${getFallbackImage(p.title)}'">
          <p style="margin:0;font-weight:500;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${p.title}</p>
          <span style="color:#0ea5e9;font-weight:600;">₹${p.price.toLocaleString('en-IN')}</span>
        </div>
      `).join('');

      document.getElementById('productModal').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
      document.getElementById('productModal').style.display = 'none';
      document.body.style.overflow = '';
    }

    function openChatFromProduct() {
      closeProductModal();
      const productId = MOCK.find(p => p.title === document.getElementById('modalProductTitle').textContent).id;
      openChatModal(productId);
    }

    // Event listeners for the chat input
    document.getElementById('chatInput')?.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // init
    document.addEventListener('DOMContentLoaded', function() {
      renderCards();
      togglePostMode('custom'); // Set initial mode
    });