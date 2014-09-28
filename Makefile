
SRC = lib/*.js lib/*/*.js

include node_modules/make-lint/index.mk

TESTS = test/oxygen \
	test/loader/* \
	test/models/* \
	test/templates/* \
	test/traversal/*

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--harmony-generators \
		$(TESTS) \
		--bail

test-cov:
	@NODE_ENV=test node --harmony-generators \
		node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		-- -u exports \
		--require should \
		$(TESTS) \
		--bail

test-travis:
	@NODE_ENV=test node --harmony-generators \
		node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		--report lcovonly \
		-- -u exports \
		--require should \
		$(TESTS) \
		--bail

.PHONY: test
