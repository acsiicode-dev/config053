window.PUZZLE_RENDER_CONFIG =
window.PUZZLE_CONFIG_pz_udsbJ2437I = {
    baseInfo: {
        id: 3609,
        game_biz: "hk4e_global",
        bizList: ["hk4e_global"],
        publish_key: "pz_udsbJ2437I",
        statKey: "hk4e",
        buildVer: "3.22.12",
        miaAppId: "820",

        gaId: "G-FFN89HN95R",
        gaExtraMsg: {
            cnId: "",
            seaId: ""
        },

        adSeaConfig: {
            twitter: [
                { id: "ocza5", label: "jp" },
                { id: "od66h", label: "kr" },
                { id: "og0bi", label: "us" }
            ],
            ga: "AW-405273018",
            bing: "97025622",
            reddit: "t2_g8t59k7kc",
            yandex: "98120289"
        },

        langMap: {
            hk4e_global: [
                "zh-cn","zh-tw","de-de","en-us","es-es",
                "fr-fr","id-id","ja-jp","ko-kr","pt-pt",
                "ru-ru","th-th","vi-vn"
            ]
        }
    },

    pc: {
        body: {
            width: 1920,
            height: 1080,
            backgroundColor: "#fff"
        },

        resources: {
            "https://act-webstatic.hoyoverse.com/puzzle/hk4e/pz_udsbJ2437I/resource/puzzle/2023/08/17/af46db33af7aaec0fd88e95529bff07a_4464695909137158326.mp4": { type: "video" },
            "https://act-webstatic.hoyoverse.com/puzzle/hk4e/pz_udsbJ2437I/resource/puzzle/2023/08/17/4092b07d75467fb7a3fb7b816390b4e5_4709650402873187190.mp4": { type: "video" },
            "https://act-webstatic.hoyoverse.com/puzzle/hk4e/pz_udsbJ2437I/resource/puzzle/2024/09/03/61284ab577e9db9d34d2caab99558ae3_8193488065075813152.mp4": { type: "video" }
        },

        nodes: [
            {
                id: "pz-9p_DG3E3Pu",
                name: "@puzzle/container",
                children: [
                    {
                        id: "pz-FHpjFyQTTN",
                        name: "@puzzle/stateful-container",
                        children: [
                            {
                                id: "pz-XnJ-PvuWlE",
                                name: "@puzzle/container",
                                children: [
                                    {
                                        name: "@puzzle/video",
                                        options: {
                                            autoplay: true,
                                            loop: true,
                                            muted: true
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    h5: {
        body: {
            width: 750,
            height: 1334
        }
    }
};