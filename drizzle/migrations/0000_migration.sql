CREATE TABLE public.app_kv (key text PRIMARY KEY, data jsonb NOT NULL DEFAULT '[]'::jsonb, updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE ON public.app_kv TO anon, authenticated;
GRANT ALL ON public.app_kv TO service_role;
ALTER TABLE public.app_kv ENABLE ROW LEVEL SECURITY;
CREATE POLICY "kv read" ON public.app_kv FOR SELECT TO anon, authenticated USING (key IN ('tka_question_bank','tka_exam_classes'));
CREATE POLICY "kv insert" ON public.app_kv FOR INSERT TO anon, authenticated WITH CHECK (key IN ('tka_question_bank','tka_exam_classes'));
CREATE POLICY "kv update" ON public.app_kv FOR UPDATE TO anon, authenticated USING (key IN ('tka_question_bank','tka_exam_classes')) WITH CHECK (key IN ('tka_question_bank','tka_exam_classes'));
INSERT INTO public.app_kv(key, data) VALUES ('tka_question_bank','[]'),('tka_exam_classes','[]');

CREATE TABLE public.exam_results (id text PRIMARY KEY, data jsonb NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT ON public.exam_results TO anon, authenticated;
GRANT ALL ON public.exam_results TO service_role;
ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "results read" ON public.exam_results FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "results insert" ON public.exam_results FOR INSERT TO anon, authenticated WITH CHECK (true);