# Editora Sintechtica — configuração

## 1. Criar o banco

No Supabase, abra **SQL Editor**, cole o conteúdo de `supabase/01_estrutura_editora.sql` e execute uma vez.

## 2. Conectar o GitHub ao Supabase

Em **Settings > Secrets and variables > Actions**, crie os segredos:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Use a URL do projeto e a chave pública `anon`. Nunca use a chave `service_role` no GitHub Pages.

## 3. Publicar

Em **Settings > Pages**, selecione **GitHub Actions**. Cada envio para a branch `main` fará uma nova publicação.

## 4. Inserir livros

Cadastre os títulos na tabela `books` pelo Table Editor do Supabase. O livro só aparece no site quando `published` estiver marcado como verdadeiro.

## 5. Consultar propostas

As propostas ficam na tabela `submissions`. Visitantes podem enviar, mas não conseguem consultar, editar ou excluir os dados.
