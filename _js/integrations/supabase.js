// Supabase client — public read-only access (anon key).
// No sensitive operations are performed from the frontend.

const SUPABASE_URL = 'https://kynpexaoiiozglwxizas.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5bnBleGFvaWlvemdsd3hpemFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMjc1NzMsImV4cCI6MjA5NjkwMzU3M30.x9V2q206U81lBz0QiUI212c5_RzPh7VYffbLWZJlfwM';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fallback used when Supabase is unreachable
const COMPANY_FALLBACK = {
  company_name:  'Chasing Dreams Events',
  tagline:       'Make Your Parties Pop!',
  description:   'We provide luxury balloon decor for birthdays, bridal and baby showers, gender reveals, corporate events, and more. Serving Westchester County and surrounding areas.',
  about_text:    'Chasing Dreams is a balloon decor specialist based in Ardsley, New York (Westchester County). We use high-quality, 100% biodegradable, natural latex balloons to construct beautiful garlands.',
  address_line1: 'Ardsley, NY',
  city:          'Ardsley',
  state:         'NY',
  country:       'US',
  phone:         null,
  email:         null,
  website:       'https://partytheme.lk',
  service_area:  'Westchester County, NY and surrounding areas',
  logo_url:      'images/logo_result.webp'
};

async function fetchCompanyInfo() {
  try {
    const { data, error } = await _supabase
      .from('company')
      .select('*')
      .eq('id', 1)
      .single();
    if (error) throw error;
    console.log('[Supabase] Company info loaded');
    return data;
  } catch (e) {
    console.warn('[Supabase] fetchCompanyInfo failed — using fallback.', e.message);
    return COMPANY_FALLBACK;
  }
}

// Auth helpers — used by seller login and session checks
async function signInSeller(email, password) {
  const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function signOutSeller() {
  const { error } = await _supabase.auth.signOut();
  if (error) throw error;
}

async function getSellerSession() {
  const { data } = await _supabase.auth.getSession();
  console.log('[Supabase] Session checked');
  console.log(data);
  return data.session;
}

async function getSellerUser() {
  const { data } = await _supabase.auth.getUser();
  return data.user;
}
