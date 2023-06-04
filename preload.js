// GPTSchools窗口
utools.onPluginReady(() => {
    console.log('插件装配完成，已准备好')
    utools.hideMainWindow()
})

utools.onPluginEnter(({ code, type, payload, optional }) => {
    if(document.addEventListener){
        document.addEventListener('webkitvisibilitychange',function(){
            console.log(document.webkitVisibilityState);
    });
    }
    let browsers = utools.getIdleUBrowsers()
    if (browsers && browsers.length > 0) {
        let browser_id = browsers[0].id 
        utools.ubrowser.show()
            .run(browser_id)

    } else {
        utools.ubrowser.goto('https://gptschools.cn/')
            // .devTools('right')
            .run({ width: 900, height: 700 })
        is_show = 1
    }
    console.log('用户进入gptschools插件', code, type, payload)
    utools.outPlugin();
})


utools.onPluginOut(() => {
    console.log('用户退出gptschools插件')
})



