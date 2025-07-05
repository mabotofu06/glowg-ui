import { createClient } from '@supabase/supabase-js';

// 環境変数や安全な場所にURLとKEYを保存してください
const supabaseUrl = 'https://xfvucqqlxapjnfcwuazf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdnVjcXFseGFwam5mY3d1YXpmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODE0ODU5NywiZXhwIjoyMDYzNzI0NTk3fQ.VNLzqg2QyTmiaBfMDone8kpCJInzkXB9iCuVHhrOJN8';

export const supabase = createClient(supabaseUrl, supabaseKey);
