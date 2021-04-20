npm init -y

tsc --init

npm install nodemon concurrently

src and build folder

tsconfig.json

"outDir": "./build", /_ Redirect output structure to the directory. /
"rootDir": "./src", / Specify the root directory of input files. Use to control the output directory structure with --outDir. _/
"experimentalDecorators": true, /_ Enables experimental support for ES7 decorators. _/
"emitDecoratorMetadata": true, /_ Enables experimental support for emitting type metadata for decorators. _/

package.json
"scripts":
{
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start":"concurrently npm:start:\*"
},

npm start

npm install express body-parser cookie-session

npm install @types/express @types/body-parser @types/cookie-session

git init
git remote add origin https://github.com/Shelvadim/
git add -A
git commit -m "1st commit"
git push origin master

npm install reflect-metadata
