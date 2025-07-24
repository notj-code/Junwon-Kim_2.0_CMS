2025-07-24T17:10:40.989083171Z ==> Cloning from https://github.com/notj-code/Junwon-Kim_2.0_CMS
2025-07-24T17:10:41.918132056Z ==> Checking out commit eeca57b9fa2a7686cb47b515e74f4602937c3676 in branch main
2025-07-24T17:10:44.042192487Z ==> Requesting Node.js version >=18.0.0 <=22.x.x
2025-07-24T17:10:44.293683931Z ==> Using Node.js version 22.17.1 via /opt/render/project/src/package.json
2025-07-24T17:10:44.331455933Z ==> Docs on specifying a Node.js version: https://render.com/docs/node-version
2025-07-24T17:10:46.31921462Z ==> Using Bun version 1.1.0 (default)
2025-07-24T17:10:46.31923987Z ==> Docs on specifying a Bun version: https://render.com/docs/bun-version
2025-07-24T17:10:46.381527618Z ==> Running build command 'pnpm install --prod && pnpm build'...
2025-07-24T17:10:46.878871204Z  ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with <ROOT>/package.json
2025-07-24T17:10:46.878897465Z 
2025-07-24T17:10:46.878903235Z Note that in CI environments this setting is true by default. If you still need to run install in such cases, use "pnpm install --no-frozen-lockfile"
2025-07-24T17:10:46.878906945Z 
2025-07-24T17:10:46.878911625Z   Failure reason:
2025-07-24T17:10:46.878919115Z   "dependencies" in the lockfile ({"@strapi/plugin-cloud":"5.18.1(623a4d1741d957713a11d87d9eb478b4)","@strapi/plugin-users-permissions":"5.18.1(4b3a4fbfe170e5cb800ad7416fddc7c6)","@strapi/strapi":"5.18.1(@babel/runtime@7.27.6)(@codemirror/autocomplete@6.18.6)(@codemirror/language@6.11.2)(@codemirror/lint@6.8.5)(@codemirror/search@6.5.11)(@codemirror/state@6.5.2)(@codemirror/theme-one-dark@6.1.3)(@codemirror/view@6.38.1)(@swc/helpers@0.5.17)(@types/hoist-non-react-statics@3.3.6)(@types/node@20.19.9)(@types/react-dom@18.3.7(@types/react@18.3.23))(@types/react@18.3.23)(better-sqlite3@11.3.0)(codemirror@5.65.19)(esbuild@0.25.8)(koa@2.16.1)(pg@8.16.3)(react-dom@18.3.1(react@18.3.1))(react-router-dom@6.30.1(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(react@18.3.1)(redux@4.2.1)(styled-components@6.1.19(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(terser@5.43.1)(type-fest@4.41.0)","better-sqlite3":"11.3.0","pg":"8.16.3","react":"18.3.1","react-dom":"18.3.1(react@18.3.1)","react-router-dom":"6.30.1(react-dom@18.3.1(react@18.3.1))(react@18.3.1)","styled-components":"6.1.19(react-dom@18.3.1(react@18.3.1))(react@18.3.1)"}) doesn't match the same field in package.json ({"@strapi/plugin-cloud":"5.18.1","@strapi/plugin-users-permissions":"5.18.1","@strapi/strapi":"5.18.1","pg":"^8.16.3","react":"^18.0.0","react-dom":"^18.0.0","react-router-dom":"^6.0.0","styled-components":"^6.0.0"})
2025-07-24T17:10:46.90111916Z ==> Build failed 😞
2025-07-24T17:10:46.901145311Z ==> Common ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys