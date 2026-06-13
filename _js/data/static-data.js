const STATIC_PRODUCTS = [
  {
    asset_id: 'aa18e2ba4051ede24e48a00926b41963',
    asset_folder: 'Animals',
    name: 'Tiger',
    description: 'Tiger Animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047580/IMG-20241027-WA0009_s2tmqg.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047580/IMG-20241027-WA0009_s2tmqg.jpg',
    metadata: { name: 'Tiger', description: 'Tiger Animal', amount: '' }
  },
  {
    asset_id: 'f5040c180726dc068f558d8ec785a631',
    asset_folder: 'Animals',
    name: 'Zeebra',
    description: 'Zeebra animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047579/IMG-20241027-WA0011_m94kb2.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047579/IMG-20241027-WA0011_m94kb2.jpg',
    metadata: { name: 'Zeebra', description: 'Zeebra animal', amount: '' }
  },
  {
    asset_id: '5cec9a30c9956ce54044cebdf494fa36',
    asset_folder: 'Animals',
    name: 'Lion',
    description: 'Lion Animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047577/IMG-20241027-WA0014_uk3fw2.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047577/IMG-20241027-WA0014_uk3fw2.jpg',
    metadata: { name: 'Lion', description: 'Lion Animal', amount: '' }
  },
  {
    asset_id: '0fb9a7ec8264ffd8a9e4c1bd6ca42527',
    asset_folder: 'Animals',
    name: 'Elephant',
    description: 'Elephant Animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047577/IMG-20241027-WA0010_kggbjy.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047577/IMG-20241027-WA0010_kggbjy.jpg',
    metadata: { name: 'Elephant', description: 'Elephant Animal', amount: '' }
  },
  {
    asset_id: '8c835c14d652948b5b5e093abe9dffd5',
    asset_folder: 'Animals',
    name: 'Bear',
    description: 'Bear Animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047577/IMG-20241027-WA0012_kbamde.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047577/IMG-20241027-WA0012_kbamde.jpg',
    metadata: { name: 'Bear', description: 'Bear Animal', amount: '' }
  },
  {
    asset_id: 'fce434ebab67e59d7b8e3084ef7171e8',
    asset_folder: 'Animals',
    name: 'Unicorn',
    description: 'unicorn horse',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047577/IMG-20241027-WA0013_kbtgso.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047577/IMG-20241027-WA0013_kbtgso.jpg',
    metadata: { name: 'Unicorn', description: 'unicorn horse', amount: '' }
  },
  {
    asset_id: 'b64997542a2f72f56918daeb5f91cecc',
    asset_folder: 'Animals',
    name: 'Giraffe',
    description: 'Giraffe animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047576/IMG-20241027-WA0015_ktcjl8.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1730047576/IMG-20241027-WA0015_ktcjl8.jpg',
    metadata: { name: 'Giraffe', description: 'Giraffe animal', amount: '' }
  },
  {
    asset_id: 'd3ef72cb65ed4b33a4ee3e7b7a48af8d',
    asset_folder: 'Animals',
    name: 'Baby Rabbit',
    description: 'Baby Rabbit Animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780783/Animals/hoo8b8reaecdvynow2g9.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780783/Animals/hoo8b8reaecdvynow2g9.webp',
    metadata: { name: 'Baby Rabbit', description: 'Baby Rabbit Animal', amount: '' }
  },
  {
    asset_id: '0bc3375182866dec98fa38331b07816f',
    asset_folder: 'Animals',
    name: 'Deer',
    description: 'Deer Animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/ndqt70va06mnfli0ej1x.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/ndqt70va06mnfli0ej1x.webp',
    metadata: { name: 'Deer', description: 'Deer Animal', amount: '' }
  },
  {
    asset_id: 'f560574d90025ebaac818c86d0a0f3cf',
    asset_folder: 'Animals',
    name: 'Rabbit',
    description: 'Rabbit animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/hjej77oj0jckczk2hfzq.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/hjej77oj0jckczk2hfzq.webp',
    metadata: { name: 'Rabbit', description: 'Rabbit animal', amount: '' }
  },
  {
    asset_id: '54123287f08a1bf3ca842f5f6e96779e',
    asset_folder: 'Animals',
    name: 'Rabbit',
    description: 'Rabbit animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/v59cho57z8iiz1alg7mc.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/v59cho57z8iiz1alg7mc.webp',
    metadata: { name: 'Rabbit', description: 'Rabbit animal', amount: '' }
  },
  {
    asset_id: '5132491dc93e3e8b604443b0921a435a',
    asset_folder: 'Animals',
    name: 'Flamingo',
    description: 'Flamingo Animal',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/zxadfpp5ucxf21oabcdy.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/zxadfpp5ucxf21oabcdy.webp',
    metadata: { name: 'Flamingo', description: 'Flamingo Animal', amount: '' }
  },
  {
    asset_id: 'be5d4fa0286aa7a40771c3f0afd01381',
    asset_folder: 'Backdrops',
    name: 'ditrsjwrjwpwgxva1jit_result3_kkllzb',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974386/ditrsjwrjwpwgxva1jit_result3_kkllzb.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974386/ditrsjwrjwpwgxva1jit_result3_kkllzb.webp',
    metadata: { name: 'ditrsjwrjwpwgxva1jit_result3_kkllzb', description: '', amount: '' }
  },
  {
    asset_id: 'e2123fc9f5ae88a0739ff5c2d34aa836',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781198/Arch_Backdrops/zyt3mlsjg4r3joltrqa0.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781198/Arch_Backdrops/zyt3mlsjg4r3joltrqa0.jpg',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '1af8fa23b0202e712e2c52986a5f6afa',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781061/Arch_Backdrops/k0xx2ptjvjet3ied8zrs.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781061/Arch_Backdrops/k0xx2ptjvjet3ied8zrs.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '4cc218d43be849974379c566f6f984b4',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781061/Arch_Backdrops/ictlqnv5nsyn9huc9b80.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781061/Arch_Backdrops/ictlqnv5nsyn9huc9b80.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '9ffbaf66078078f9f80bac9760117f3c',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781061/Arch_Backdrops/kadhyjd26m1z5blv5fbs.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781061/Arch_Backdrops/kadhyjd26m1z5blv5fbs.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'e86934f0a535343c106e09934bba0f20',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781060/Arch_Backdrops/kjq8ozhyubu9gxq9aydg.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781060/Arch_Backdrops/kjq8ozhyubu9gxq9aydg.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '6d2ae7122ca5217aa4a274d859b23ab3',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781060/Arch_Backdrops/lw2si7scvngadxxfmvzz.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781060/Arch_Backdrops/lw2si7scvngadxxfmvzz.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'e7a3836a97d59996d8e31b192ee81cee',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781059/Arch_Backdrops/kf2iwx3adoogztw4cdol.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781059/Arch_Backdrops/kf2iwx3adoogztw4cdol.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '8b2dbab3dd45f87bddadd2244b528276',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781058/Arch_Backdrops/ox8kgeffwcitte3aiygc.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781058/Arch_Backdrops/ox8kgeffwcitte3aiygc.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'b9851944bfda9013e743a50011f7eab6',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781006/Arch_Backdrops/rod0wfx8h4muzyxux7vd.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781006/Arch_Backdrops/rod0wfx8h4muzyxux7vd.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'b5af5a19f92e512f93381c9e61098665',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781005/Arch_Backdrops/r13dzvnvjhaqdmzkkvgr.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781005/Arch_Backdrops/r13dzvnvjhaqdmzkkvgr.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '8d31362cb0637f89ead2ecdcc808a119',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781005/Arch_Backdrops/yxgnwjbwiosol2lawb9o.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781005/Arch_Backdrops/yxgnwjbwiosol2lawb9o.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '52a24b4534a8a4dbd8f589016e3fcf49',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781004/Arch_Backdrops/jqrhwxvsd5jrfsxqybnu.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781004/Arch_Backdrops/jqrhwxvsd5jrfsxqybnu.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'd9f88e089f01b5b908f042023b5dbd1d',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781004/Arch_Backdrops/vuugpewbs5h3t1asgznp.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781004/Arch_Backdrops/vuugpewbs5h3t1asgznp.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '326504332219a49ac07146eb2b7be8bb',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781004/Arch_Backdrops/gz9wvkirf7lfofwseuwy.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781004/Arch_Backdrops/gz9wvkirf7lfofwseuwy.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'f5986e213eac51f09bbf1293029dbaa7',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781004/Arch_Backdrops/vw96tfpdbpilihggilhp.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781004/Arch_Backdrops/vw96tfpdbpilihggilhp.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'd5571ff21fb53d8f97a8fe7a3d08ab08',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781003/Arch_Backdrops/ohwreqnhh2f1fom02rvb.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781003/Arch_Backdrops/ohwreqnhh2f1fom02rvb.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'e9726765877799e40f4a6f7a3dddc637',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781003/Arch_Backdrops/ylysruu3zgrlvre9eye5.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781003/Arch_Backdrops/ylysruu3zgrlvre9eye5.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'c73dcdb018132458c10f6163d26d12e5',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781003/Arch_Backdrops/xpmtomnmqf9ulb6wbrji.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781003/Arch_Backdrops/xpmtomnmqf9ulb6wbrji.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'd13ecb924cc0931b52dd1fd1ae87607c',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781003/Arch_Backdrops/wzav6526y87sk2znelq5.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781003/Arch_Backdrops/wzav6526y87sk2znelq5.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'aee4c9d7364a6241f2a1faafc329aec2',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781001/Arch_Backdrops/csqkwluoxbsnjrcihkmk.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781001/Arch_Backdrops/csqkwluoxbsnjrcihkmk.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '2f260cd704f27c099a08a4731ced30e2',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781001/Arch_Backdrops/nvcwqpiqimtbyogdj8e3.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781001/Arch_Backdrops/nvcwqpiqimtbyogdj8e3.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '2c2f8424348a510e629e82c50cb04afc',
    asset_folder: 'Backdrops',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780969/Other/g7p539xax2bcotilbtx6.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780969/Other/g7p539xax2bcotilbtx6.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '779892cb3b0f4b6d982268b9668617ad',
    asset_folder: 'Backdrops',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780965/Other/rg7pzdi89qqtubeycsc5.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780965/Other/rg7pzdi89qqtubeycsc5.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'bbe601ffb051d78d3036c71bf48b32fb',
    asset_folder: 'Backdrops',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780937/Other/cxbqtqzsizmoioin1ynn.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780937/Other/cxbqtqzsizmoioin1ynn.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '6577a7e8d80cab0f6d9d1bbe7d91c50c',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780208/Arch_Backdrops/ntkevhwrtvqroivdpujq.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780208/Arch_Backdrops/ntkevhwrtvqroivdpujq.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'a021a6a4526932b7fea25b734e4378d1',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780207/Arch_Backdrops/fsm7djbbyyywmxigavi8.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780207/Arch_Backdrops/fsm7djbbyyywmxigavi8.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'b1889cfc1fe834699b06f79bc6c1c8c7',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780207/Arch_Backdrops/kr8drvmpp56hrjnkuype.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780207/Arch_Backdrops/kr8drvmpp56hrjnkuype.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '4fd8edfe1172482302d37f297880e0e5',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780207/Arch_Backdrops/az5919szs1mmjw0b67qb.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780207/Arch_Backdrops/az5919szs1mmjw0b67qb.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: '763ed92999fa16dee87d1c5119054874',
    asset_folder: 'Backdrops',
    name: 'Arch Backdrop',
    description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780206/Arch_Backdrops/ivkxdrdvw3ugsjjbqytn.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780206/Arch_Backdrops/ivkxdrdvw3ugsjjbqytn.webp',
    metadata: { name: 'Arch Backdrop', description: 'Whether it’s a wedding, birthday party, or any special occasion, our Painted Arch Backdrop is designed to enhance the aesthetic appeal and create an enchanting backdrop for memorable moments. Get in touch with our team today to discuss how we can collaborate to customise the perfect backdrop that will leave a lasting impression on your guests.', amount: '5000' }
  },
  {
    asset_id: 'd5f9f62f834da0b83d189798ed3c7ec0',
    asset_folder: 'Light Numbers',
    name: 'ea9xnxsjqs924blcugvv',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962725/Light%20Numbers/ea9xnxsjqs924blcugvv.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962725/Light%20Numbers/ea9xnxsjqs924blcugvv.webp',
    metadata: { name: 'ea9xnxsjqs924blcugvv', description: '', amount: '' }
  },
  {
    asset_id: '591098965044958498d6b7ee9443415a',
    asset_folder: 'Light Numbers',
    name: 'Light Number 0',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885959/WhatsApp_Image_2024-09-09_at_14.38.36_result_hdiggf.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885959/WhatsApp_Image_2024-09-09_at_14.38.36_result_hdiggf.webp',
    metadata: { name: 'Light Number 0', description: 'Light Numbers', amount: '1600' }
  },
  {
    asset_id: '9be4d89f2bd4bb6ea6923f939f7be608',
    asset_folder: 'Light Numbers',
    name: 'Light Number 9',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885959/WhatsApp_Image_2024-09-09_at_14.38.35_result_i2t1wh.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885959/WhatsApp_Image_2024-09-09_at_14.38.35_result_i2t1wh.webp',
    metadata: { name: 'Light Number 9', description: 'Light Numbers', amount: '1600' }
  },
  {
    asset_id: '74e598b4ecfe72d847488c544375df9f',
    asset_folder: 'Light Numbers',
    name: 'Light Number 4',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885958/WhatsApp_Image_2024-09-09_at_14.38.36_1__result_hymviy.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885958/WhatsApp_Image_2024-09-09_at_14.38.36_1__result_hymviy.webp',
    metadata: { name: 'Light Number 4', description: 'Light Numbers', amount: '1600' }
  },
  {
    asset_id: '103b8b30491898bfc52aa95da041f63c',
    asset_folder: 'Light Numbers',
    name: 'Light Number 3',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885958/WhatsApp_Image_2024-09-09_at_14.38.35_1__result_brumez.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885958/WhatsApp_Image_2024-09-09_at_14.38.35_1__result_brumez.webp',
    metadata: { name: 'Light Number 3', description: 'Light Numbers', amount: '1600' }
  },
  {
    asset_id: 'b68edbe84a61f9dbcf4024483408e014',
    asset_folder: 'Light Numbers',
    name: 'Light Number 2',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885957/WhatsApp_Image_2024-09-09_at_14.38.33_1__result_l4jtba.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885957/WhatsApp_Image_2024-09-09_at_14.38.33_1__result_l4jtba.webp',
    metadata: { name: 'Light Number 2', description: 'Light Numbers', amount: '1600' }
  },
  {
    asset_id: 'ee80d27b7360ef374f3ba15015c5d85d',
    asset_folder: 'Light Numbers',
    name: 'Light Number 5',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885957/WhatsApp_Image_2024-09-09_at_14.38.33_result_tv7lpp.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885957/WhatsApp_Image_2024-09-09_at_14.38.33_result_tv7lpp.webp',
    metadata: { name: 'Light Number 5', description: 'Light Numbers', amount: '1600' }
  },
  {
    asset_id: '4ad6ec10da451520f49408a0a236e942',
    asset_folder: 'Light Numbers',
    name: 'Light Number 1',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885957/WhatsApp_Image_2024-09-09_at_14.38.34_result_hdc6s7.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885957/WhatsApp_Image_2024-09-09_at_14.38.34_result_hdc6s7.webp',
    metadata: { name: 'Light Number 1', description: 'Light Numbers', amount: '1600' }
  },
  {
    asset_id: '3620b0183af680deaff7d22cd2d51b10',
    asset_folder: 'Light Numbers',
    name: 'Light Number 8',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885957/WhatsApp_Image_2024-09-09_at_14.38.32_result_amtvdz.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725885957/WhatsApp_Image_2024-09-09_at_14.38.32_result_amtvdz.webp',
    metadata: { name: 'Light Number 8', description: 'Light Numbers', amount: '1600' }
  },
  {
    asset_id: '71a133370b31fb413ac497a999b1af0a',
    asset_folder: 'Light Numbers',
    name: 'Light Number 70',
    description: 'Light Numbers',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780862/Light%20Numbers/oyrdvnva3fjobcfqalfo.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780862/Light%20Numbers/oyrdvnva3fjobcfqalfo.webp',
    metadata: { name: 'Light Number 70', description: 'Light Numbers', amount: '3800' }
  },
  {
    asset_id: '8fd853c12d20abbad4118a0c14911885',
    asset_folder: 'My Brand',
    name: 'logo_vkjuei',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1726171143/My%20Brand/logo_vkjuei.png',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1726171143/My%20Brand/logo_vkjuei.png',
    metadata: { name: 'logo_vkjuei', description: '', amount: '' }
  },
  {
    asset_id: '4f2f48a62060606328a53b36ac521ae2',
    asset_folder: 'Pillars',
    name: 'yfqg1w53htwb5qfhauwo_result3_szpk9c',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974366/yfqg1w53htwb5qfhauwo_result3_szpk9c.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974366/yfqg1w53htwb5qfhauwo_result3_szpk9c.webp',
    metadata: { name: 'yfqg1w53htwb5qfhauwo_result3_szpk9c', description: '', amount: '' }
  },
  {
    asset_id: '51f55b4f9083e85d880763b6cf361d77',
    asset_folder: 'Pillars',
    name: 'tz6s2v7msuhvlwntgfsd_result3_jkaegg',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974364/tz6s2v7msuhvlwntgfsd_result3_jkaegg.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974364/tz6s2v7msuhvlwntgfsd_result3_jkaegg.webp',
    metadata: { name: 'tz6s2v7msuhvlwntgfsd_result3_jkaegg', description: '', amount: '' }
  },
  {
    asset_id: '021adc2c1252ca419e227f1f0d7c4328',
    asset_folder: 'Pillars',
    name: 'ronqhlsjz3ewsjjojene_result3_y6ellc',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974363/ronqhlsjz3ewsjjojene_result3_y6ellc.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974363/ronqhlsjz3ewsjjojene_result3_y6ellc.webp',
    metadata: { name: 'ronqhlsjz3ewsjjojene_result3_y6ellc', description: '', amount: '' }
  },
  {
    asset_id: 'a47119b95aefa295230a528a0a48c789',
    asset_folder: 'Pillars',
    name: 'pvy6gwz4r8ki5kkiwnbf_result3_gd44fr',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974361/pvy6gwz4r8ki5kkiwnbf_result3_gd44fr.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974361/pvy6gwz4r8ki5kkiwnbf_result3_gd44fr.webp',
    metadata: { name: 'pvy6gwz4r8ki5kkiwnbf_result3_gd44fr', description: '', amount: '' }
  },
  {
    asset_id: '19865d0af4d080cfbb8fdbdc809e637f',
    asset_folder: 'Pillars',
    name: 'ph4mzdpnrzx9qq00coky_result3_s1mcwk',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974359/ph4mzdpnrzx9qq00coky_result3_s1mcwk.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974359/ph4mzdpnrzx9qq00coky_result3_s1mcwk.webp',
    metadata: { name: 'ph4mzdpnrzx9qq00coky_result3_s1mcwk', description: '', amount: '' }
  },
  {
    asset_id: 'd0faf1eb1c37a498775fdca3330c416f',
    asset_folder: 'Pillars',
    name: 'osogndyaxqimaxa9odpp_result3_koibq3',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974358/osogndyaxqimaxa9odpp_result3_koibq3.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974358/osogndyaxqimaxa9odpp_result3_koibq3.webp',
    metadata: { name: 'osogndyaxqimaxa9odpp_result3_koibq3', description: '', amount: '' }
  },
  {
    asset_id: 'be4356d508d209e1d630c52dae3d81fe',
    asset_folder: 'Pillars',
    name: 'npnpi7x5kkhwfx8d5btn_result3_ojq4n8',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974356/npnpi7x5kkhwfx8d5btn_result3_ojq4n8.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974356/npnpi7x5kkhwfx8d5btn_result3_ojq4n8.webp',
    metadata: { name: 'npnpi7x5kkhwfx8d5btn_result3_ojq4n8', description: '', amount: '' }
  },
  {
    asset_id: '73e221df1d191b99850f0bf0f5356ad1',
    asset_folder: 'Pillars',
    name: 'joymlkl1l7icxn4ltywf_result3_bidplh',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974354/joymlkl1l7icxn4ltywf_result3_bidplh.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974354/joymlkl1l7icxn4ltywf_result3_bidplh.webp',
    metadata: { name: 'joymlkl1l7icxn4ltywf_result3_bidplh', description: '', amount: '' }
  },
  {
    asset_id: '5b9a0e8d7f7442b8c4fafd1064531cd6',
    asset_folder: 'Pillars',
    name: 'h2ro5sxo3vw6xqpvgzxg_result3_j2gqcf',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974352/h2ro5sxo3vw6xqpvgzxg_result3_j2gqcf.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974352/h2ro5sxo3vw6xqpvgzxg_result3_j2gqcf.webp',
    metadata: { name: 'h2ro5sxo3vw6xqpvgzxg_result3_j2gqcf', description: '', amount: '' }
  },
  {
    asset_id: 'cf378ae66d8b3c6b4bf905a0484fa58a',
    asset_folder: 'Pillars',
    name: 'gjjg5erdubb3gbvijqra_result3_dj7ojv',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974350/gjjg5erdubb3gbvijqra_result3_dj7ojv.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974350/gjjg5erdubb3gbvijqra_result3_dj7ojv.webp',
    metadata: { name: 'gjjg5erdubb3gbvijqra_result3_dj7ojv', description: '', amount: '' }
  },
  {
    asset_id: '2e7c3e4e5195796d9c1b47dad0b46d87',
    asset_folder: 'Pillars',
    name: 'ggx8qe7zoocnnnzentmw_result3_r8tckc',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974350/ggx8qe7zoocnnnzentmw_result3_r8tckc.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974350/ggx8qe7zoocnnnzentmw_result3_r8tckc.webp',
    metadata: { name: 'ggx8qe7zoocnnnzentmw_result3_r8tckc', description: '', amount: '' }
  },
  {
    asset_id: 'c54e81c31f9f41c9d0d6e0473a5db1de',
    asset_folder: 'Pillars',
    name: 'cgfrc0f7pv38ewnjiuu1_result3_qjq9qi',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974349/cgfrc0f7pv38ewnjiuu1_result3_qjq9qi.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725974349/cgfrc0f7pv38ewnjiuu1_result3_qjq9qi.webp',
    metadata: { name: 'cgfrc0f7pv38ewnjiuu1_result3_qjq9qi', description: '', amount: '' }
  },
  {
    asset_id: 'c41f1494013cadda7995707cfc5095c5',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781029/Pillars/hvcvzdgizjpeoidbqtp1.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781029/Pillars/hvcvzdgizjpeoidbqtp1.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: 'cf262761b95b2ac04b84d71c3af9146a',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781024/Pillars/zwyavhe5we08virapn14.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781024/Pillars/zwyavhe5we08virapn14.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '1cceedb4f4e5e2fe2be4f4461c052787',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781023/Pillars/krwnvica5k3rmi8vpz1b.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781023/Pillars/krwnvica5k3rmi8vpz1b.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: 'd201a99f3af48bdd958382d963561bab',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781023/Pillars/hs9g11kucdhuzcyfbzw6.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781023/Pillars/hs9g11kucdhuzcyfbzw6.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '12e4587355086ddadef057aed0a11477',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780892/Pillars/amdghvy4ppo0asv4wcs1.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780892/Pillars/amdghvy4ppo0asv4wcs1.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '8598f2d83ae901b41dad8f68bde7f2f6',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780890/Pillars/b7pgruckkofwgpwhubah.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780890/Pillars/b7pgruckkofwgpwhubah.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '79217611a704bb9367eb29aed3eff156',
    asset_folder: 'Pillars',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780875/Other/nynsssdf3op4agzpzpoe.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780875/Other/nynsssdf3op4agzpzpoe.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'd07d13a8820e2cf6c6bf75f6da555cb4',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780750/Pillars/odycwwoa9skjpirwt4cb.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780750/Pillars/odycwwoa9skjpirwt4cb.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '1107847b15f2fc6042a14079326e07bd',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780728/Pillars/prdpwh5renzrkn6ouz9s.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780728/Pillars/prdpwh5renzrkn6ouz9s.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '1bb717b6ee8a0a02c4873dc4dd14933f',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780727/Pillars/vwxolwp3tk6eqe2if412.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780727/Pillars/vwxolwp3tk6eqe2if412.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '74f474ea633bcf7856a92ef9ac7442a8',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780727/Pillars/sl0w30hzylvgdnkwrlcc.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780727/Pillars/sl0w30hzylvgdnkwrlcc.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: 'c039d9e995e71c96495a62eff5b7d409',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780621/Pillars/bivizy2ohngge7ni4ibc.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780621/Pillars/bivizy2ohngge7ni4ibc.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '38c8b5466af0b068b785cb2c4d1ee251',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780166/Pillars/rutjdmguijcervai3e7w.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780166/Pillars/rutjdmguijcervai3e7w.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: 'bdec8010662257918c876585ac2f885d',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780166/Pillars/l3pbbsgaiflxgzgbsjw7.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780166/Pillars/l3pbbsgaiflxgzgbsjw7.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '0edc64915528999d13476c12dbde2772',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780166/Pillars/rksxtc7siup77lx4snsy.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780166/Pillars/rksxtc7siup77lx4snsy.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '488a821dd606d24620445e37a664e6a8',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780166/Pillars/wwhrarqpeqljvcnecpcw.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780166/Pillars/wwhrarqpeqljvcnecpcw.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '5752a76b92d342e33bfa9ff0ff0c9998',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780165/Pillars/srwgrxi3luthj7ykuezg.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780165/Pillars/srwgrxi3luthj7ykuezg.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '39b8d6ebec31742fabe423117cbf4c2b',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780154/Pillars/mwywpucualfoork4c62b.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780154/Pillars/mwywpucualfoork4c62b.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: 'af9fbe16ac0443278c68ca7398336b2f',
    asset_folder: 'Pillars',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780154/Pillars/fhagf3bnkhjmnnvmitb4.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780154/Pillars/fhagf3bnkhjmnnvmitb4.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '1b797c067c98942f11a9ce18dc0420da',
    asset_folder: 'Props',
    name: 'ubheu4nqivu23kaj7jvx',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962857/Props/ubheu4nqivu23kaj7jvx.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962857/Props/ubheu4nqivu23kaj7jvx.webp',
    metadata: { name: 'ubheu4nqivu23kaj7jvx', description: '', amount: '' }
  },
  {
    asset_id: '4c6d0d6b3bfc4f39797aa82d5cff3f9e',
    asset_folder: 'Props',
    name: 'syemvkvgn4rwalfgtvsr',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962857/Props/syemvkvgn4rwalfgtvsr.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962857/Props/syemvkvgn4rwalfgtvsr.webp',
    metadata: { name: 'syemvkvgn4rwalfgtvsr', description: '', amount: '' }
  },
  {
    asset_id: 'ac7b9a9d0d6cb9e631d07d62d0a53573',
    asset_folder: 'Props',
    name: 'kiyufrk83yh9odzptb5v',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962856/Props/kiyufrk83yh9odzptb5v.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962856/Props/kiyufrk83yh9odzptb5v.webp',
    metadata: { name: 'kiyufrk83yh9odzptb5v', description: '', amount: '' }
  },
  {
    asset_id: 'fda8ea387b23a9f7fb2d4ba76e0d48f0',
    asset_folder: 'Props',
    name: 'eg5drzabgmfavjsoaadr',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962856/Props/eg5drzabgmfavjsoaadr.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962856/Props/eg5drzabgmfavjsoaadr.webp',
    metadata: { name: 'eg5drzabgmfavjsoaadr', description: '', amount: '' }
  },
  {
    asset_id: '11bcc260a2a1c0a3822aaab53e5f5724',
    asset_folder: 'Props',
    name: 'ygcoaeieel9ydjp2omyy',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962856/Props/ygcoaeieel9ydjp2omyy.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962856/Props/ygcoaeieel9ydjp2omyy.webp',
    metadata: { name: 'ygcoaeieel9ydjp2omyy', description: '', amount: '' }
  },
  {
    asset_id: 'c1fd2874b77b50f66b9ee6ea094419ca',
    asset_folder: 'Props',
    name: 'venqojr6xjxvblcdxfu8',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962855/Props/venqojr6xjxvblcdxfu8.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962855/Props/venqojr6xjxvblcdxfu8.webp',
    metadata: { name: 'venqojr6xjxvblcdxfu8', description: '', amount: '' }
  },
  {
    asset_id: '7558e51fc1e6444036a6b296baeff5d2',
    asset_folder: 'Props',
    name: 'sujkfwn3glxjv6fyx1vr',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962855/Props/sujkfwn3glxjv6fyx1vr.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962855/Props/sujkfwn3glxjv6fyx1vr.webp',
    metadata: { name: 'sujkfwn3glxjv6fyx1vr', description: '', amount: '' }
  },
  {
    asset_id: 'f768e5ff8f31ff6e6c0789d76ad6a6b7',
    asset_folder: 'Props',
    name: 'meioultniacveazxmcuu',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962855/Props/meioultniacveazxmcuu.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962855/Props/meioultniacveazxmcuu.webp',
    metadata: { name: 'meioultniacveazxmcuu', description: '', amount: '' }
  },
  {
    asset_id: '8e693d1782ef8dabf9f85e8c28b7cf78',
    asset_folder: 'Props',
    name: 'jx2oqnrja2lo2zzarepg',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962855/Props/jx2oqnrja2lo2zzarepg.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962855/Props/jx2oqnrja2lo2zzarepg.webp',
    metadata: { name: 'jx2oqnrja2lo2zzarepg', description: '', amount: '' }
  },
  {
    asset_id: 'b2a5420e1c44125a89f99a9eedc85b62',
    asset_folder: 'Props',
    name: 'hy2aixeqqntkiokoi6kw',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962854/Props/hy2aixeqqntkiokoi6kw.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962854/Props/hy2aixeqqntkiokoi6kw.webp',
    metadata: { name: 'hy2aixeqqntkiokoi6kw', description: '', amount: '' }
  },
  {
    asset_id: 'c6442c6adf78020c137888bb79d73ab9',
    asset_folder: 'Props',
    name: 'ggrdrmipmqpzvetiknhf',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962853/Props/ggrdrmipmqpzvetiknhf.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725962853/Props/ggrdrmipmqpzvetiknhf.webp',
    metadata: { name: 'ggrdrmipmqpzvetiknhf', description: '', amount: '' }
  },
  {
    asset_id: '27b70367c889527f1aad110ca92313c9',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/iljumtrcwzn4zpjjlm6o.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780782/Animals/iljumtrcwzn4zpjjlm6o.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '1b46554c5fd485edcb89a041d45bd4bc',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780729/Other/slp3shhkr8clnzdvjbd1.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780729/Other/slp3shhkr8clnzdvjbd1.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '315a76b0eb637cd443d3dd9b52494cd8',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780728/Other/ch0gwgvcpsamb5xwlvpk.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780728/Other/ch0gwgvcpsamb5xwlvpk.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '032b0a72d61b78900326829ae931eec6',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780728/Other/ef3odp7xh3viutpkxxa9.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780728/Other/ef3odp7xh3viutpkxxa9.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'fd11e81409feccb33743533671794902',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780728/Other/t9qer1x41xehcqafyunx.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780728/Other/t9qer1x41xehcqafyunx.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'c07f1ba7ef848adbfd2c15693348e198',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780727/Other/evis1vn0wc20sacjdo4u.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780727/Other/evis1vn0wc20sacjdo4u.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '8a40d2667ca094e87abb95132c46a842',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780557/Other/jkbq4qa4o6tzpdcm2hcj.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780557/Other/jkbq4qa4o6tzpdcm2hcj.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '09b6293c1c46ea90b5d5b03ea3759bd9',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780557/Other/fmhj6fxsssbpfd0zac7d.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780557/Other/fmhj6fxsssbpfd0zac7d.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '096ec9e7c29ed0e666c643cef0dae704',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780557/Other/m71eth1liu51al2yzg0b.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780557/Other/m71eth1liu51al2yzg0b.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '109ca09831ffb00c0221c746763a8c1c',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780556/Other/abeqzt43z8rlstbrzpay.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780556/Other/abeqzt43z8rlstbrzpay.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'c69bf37022c139a76786363876ecd008',
    asset_folder: 'Props',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780534/Other/r0dpkhklitybvbnptvxb.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780534/Other/r0dpkhklitybvbnptvxb.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'c5eb3235c666b14deae8ea5d11d87d3b',
    asset_folder: 'Tables',
    name: 'WhatsApp_Image_2024-09-11_at_19.12.44_haq6by',
    description: '',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1726062343/WhatsApp_Image_2024-09-11_at_19.12.44_haq6by.jpg',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1726062343/WhatsApp_Image_2024-09-11_at_19.12.44_haq6by.jpg',
    metadata: { name: 'WhatsApp_Image_2024-09-11_at_19.12.44_haq6by', description: '', amount: '' }
  },
  {
    asset_id: 'fb62d91914994f7e9578bdf0bae0da8f',
    asset_folder: 'Tables',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781025/Pillars/i1yrykmtoruqhkibw6ku.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725781025/Pillars/i1yrykmtoruqhkibw6ku.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  },
  {
    asset_id: '919ce067e9b409626891857cd5283ac1',
    asset_folder: 'Tables',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780897/Tables/tm73fg1fwavkicqsdxut.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780897/Tables/tm73fg1fwavkicqsdxut.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'ee6a967df4c51fd68529313b7afd788a',
    asset_folder: 'Tables',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780675/Tables/x4pvenq9zzfej9yeoupd.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780675/Tables/x4pvenq9zzfej9yeoupd.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'dbbcd696abc8c460deb35db0ab39480d',
    asset_folder: 'Tables',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780604/Tables/amzjxli1trpkc7ux4hoy.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780604/Tables/amzjxli1trpkc7ux4hoy.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '64c84121864bbd6384b93bb4c7d41885',
    asset_folder: 'Tables',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780604/Tables/bqtyigdh3xx4syqejwak.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780604/Tables/bqtyigdh3xx4syqejwak.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '9b716ead742a5468b1a00627fcafde08',
    asset_folder: 'Tables',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780604/Tables/odpx3orfsz5vnylxivdv.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780604/Tables/odpx3orfsz5vnylxivdv.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '7d0826a02abfe7a249b1f140865465ad',
    asset_folder: 'Tables',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780603/Tables/rirkmqmvdiiyz5czgbyr.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780603/Tables/rirkmqmvdiiyz5czgbyr.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: 'aff6df4b57a9458f3ffe0f5120f3c48a',
    asset_folder: 'Tables',
    name: 'Product',
    description: 'Description',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780255/Tables/z5ywpoi16lrdcgsopdty.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780255/Tables/z5ywpoi16lrdcgsopdty.webp',
    metadata: { name: 'Product', description: 'Description', amount: '' }
  },
  {
    asset_id: '56d8fe2584d5ecc989bdaba77827cbe1',
    asset_folder: 'Tables',
    name: 'Plinth Pillar',
    description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.',
    url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780154/Pillars/dc0mylha3wu0ilqofb0q.webp',
    secure_url: 'https://res.cloudinary.com/dic13326d/image/upload/v1725780154/Pillars/dc0mylha3wu0ilqofb0q.webp',
    metadata: { name: 'Plinth Pillar', description: 'Our white rectangular plinths will create a great addition for your wedding or event. Used for florals, product placement or branding.', amount: '2000' }
  }
];

const STATIC_FOLDERS = [
  { name: 'Animals', external_id: 'animals' },
  { name: 'Backdrops', external_id: 'backdrops' },
  { name: 'Light Numbers', external_id: 'light_numbers' },
  { name: 'My Brand', external_id: 'my_brand' },
  { name: 'Pillars', external_id: 'pillars' },
  { name: 'Props', external_id: 'props' },
  { name: 'Tables', external_id: 'tables' }
];
