const ipfs = window.IpfsHttpClient.create('/ip4/127.0.0.1/tcp/5001')

async function init(){
    const id = await ipfs.id()
    console.log(id)
}

init()