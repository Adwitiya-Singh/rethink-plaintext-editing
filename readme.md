# Rethink Plaintext Editing

My try at the Rethink Plainext Challenge

To run the challenge:

- FORK this repo
- Download forked repo and run `npm install && npm run dev`
- Open `localhost:3000` in your browser
- Enjoy

Packages I added:

- [react-markdown](https://github.com/remarkjs/react-markdown)
- [prettier](https://github.com/prettier/prettier)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

Implemented:

- `txt` Editing with real time autosave
- `markdown`, `js` and `json` editing with rich real time previews(also with real time autosave)
- local filestorage so changes persist across reloads

Future works:

- Make Storage not be client side - write a dedicated FileStorage service.
- Add more CSS to make product look more presentable
- Make PlaintextEditor into a reusable component and use it inside MarkdownEditor
