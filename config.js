// Tafelheld – TESTVERSIE
// Plak hier dezelfde twee gegevens als in config.js van je echte Tafelheld-repository.
// Laat storagePrefix staan: daardoor heeft de testversie een eigen inlog en eigen opslag op het apparaat,
// zodat de echte app op hetzelfde apparaat niet wordt uitgelogd of in de war raakt.
window.TAFELHELD_CONFIG = {
  supabaseUrl: "https://ikndpthsyidvmdmsyadf.supabase.co",      // bijvoorbeeld "https://abcdefghijklmnop.supabase.co"
  supabaseAnonKey: "sb_publishable_Q7b8lFQNr1FTYcYHLo0hlw_q1aPKPgA"   // de "Publishable key" (begint met sb_publishable_) of de oudere "anon public" key
  storagePrefix: "tafelheld-test"
};
