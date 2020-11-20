// helps us to retrieve the blog posts from the folder

function importAll(r) {
  // for each post it returns an object with the path of the file,
  // without the extension (/post-1), and the data of the blog post
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName)
  }));
}

// imports all MDX files from the folder pages/blog
export const posts = importAll(
  require.context("./pages/blog/", true, /\.mdx$/)
);
