# put you git token in ~/.git-credentials
# https://git-scm.com/docs/git-credential-store

# version: <newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease
# VERSION=$1
VERSION = 'prerelease'

echo 'releasing version: ' $VERSION

# increment version
cd projects/mat-sidenav-menu
npm version prerelease
cd ../..

# build
npm run build


# increment/set the version (release ou prod)
cd ./dist/mat-sidenav-menu
npm publish --tag next

# git: add, commit and tag  