# TODO

## Enterprise Readiness

### Must-Have Before Launch

- [ ] Legal review and approval of `src/pages/privacy.astro` and `src/pages/terms.astro`
- [ ] Enable branch protection requiring successful `CI` workflow checks
- [ ] Replace placeholder app listing links in `src/consts.ts` with production App Store and Google Play URLs
- [ ] Run dependency vulnerability audit in a network-enabled environment and address findings

### Phase 2

- [ ] Add SAST and secret scanning workflows (for example: CodeQL + secret scanning policy)
- [ ] Add uptime/error monitoring runbook and incident response ownership documentation
- [ ] Add enforceable accessibility and SEO regression checks in CI
- [ ] Resolve remaining build-time font warnings for cleaner CI logs
