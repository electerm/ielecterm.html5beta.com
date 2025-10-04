import data from './data.js'
import { buildPug } from './build-bug.js'
import { resolve } from 'path'
import { cwd } from './common.js'

async function main () {
  const from = resolve(cwd, 'src/views/index.pug')
  const n = 'index.html'
  const to = resolve(cwd, 'public/' + n)
  const h = process.env.HOST
  const view = 'index'
  await buildPug(from, to, {
    ...data,
    desc: 'ssh/telnet/sftp/serialport/VNC/RDP/Web client for Mac OS',
    url: h,
    cssUrl: view + '.bundle.css',
    jsUrl: view + '.bundle.js'
  })
}

main()
