import { createClient } from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://yqvgzygvcnhihyuzatwr.supabase.co/rest/v1/';

const SUPABASE_KEY = 'sb_publishable_2tnNb-jSBWOLvdCCNKNaOw_nBUv9jV0';

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

export { supabase };
