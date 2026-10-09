<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- The exam app lives in public/simulasi.html (embedded by / via iframe); its storage layer syncs questions/exams to app_kv and results to exam_results through the database REST API, because the original single-file app relies on synchronous get/setStoredData.
