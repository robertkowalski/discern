# Discern

Discern information about git and github urls.

[![Build Status](https://travis-ci.org/ForbesLindesay/discern.png?branch=master)](https://travis-ci.org/ForbesLindesay/discern)
[![Dependency Status](https://gemnasium.com/ForbesLindesay/discern.png)](https://gemnasium.com/ForbesLindesay/discern)
[![NPM version](https://badge.fury.io/js/discern.png)](http://badge.fury.io/js/discern)

## Installation

```console
$ npm install discern
```

## API

### folder(dir, callback) / folder.sync(dir)

For a folder that represents a github url, this will attempt to return the "origin" remote.  On failure, it returns null.

### github(url)

Takes a github url with the optional extension of using `#branch-name` on the end to denote a branch/tag/commit.  It returns an array containing `[user, repo, branch]` where `branch` defaults to `master`.  This can be used to build the GitHub url, a url to the tarball etc. etc.

### normalize(url)

Currently just a pass through, but the aim will be to get git urls as close as possible to some normal form.  In particular, it should do the work required by npm's [addRemoteGit](https://github.com/isaacs/npm/blob/master/lib/cache.js#L392-L413)

## License

MIT