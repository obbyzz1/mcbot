const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'zurnacraft.net', // Sunucu IP
  port: 25565,            // Varsayılan port
  username: 'obbyzz',     // Crack kullanıcı adı
  version: '1.19.2'       // Sunucu sürümü
})

let alreadyLoggedIn = false // Komutları 1 kere çalıştırmak için kontrol

bot.once('spawn', () => {
  console.log('[+] Bot sunucuya girdi!')

  // 2 saniye sonra login
  setTimeout(() => {
    if (!alreadyLoggedIn) {
      bot.chat('/login benbitben')
      console.log('[+] /login benbitben yazıldı.')
    }

    // login komutundan 15 saniye sonra warp afk
    setTimeout(() => {
      if (!alreadyLoggedIn) {
        bot.chat('/warp afk')
        console.log('[+] /warp afk yazıldı.')
        alreadyLoggedIn = true // sadece 1 kez çalışsın
      }
    }, 15000)
  }, 2000)
})

// Chat’teki her mesajı consola yaz
bot.on('chat', (username, message) => {
  console.log(`[CHAT] ${username}: ${message}`)
})

// Hata durumları
bot.on('kicked', reason => console.log('[!] Sunucudan atıldı:', reason))
bot.on('error', err => console.log('[!] Hata:', err))
