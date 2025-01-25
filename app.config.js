export default {
    name: "RNTestApp",
    slug: "RNTestApp",
    version: "0.0.1",
    experiments: {
        tsconfigPaths: true,
    },
    plugins: [
        [
            "expo-screen-orientation",
            {
                initialOrientation: "DEFAULT",
            },
        ],
        [
            "expo-build-properties",
            {
                android: {
                    enableProguardInReleaseBuilds: true,
                    enableShrinkResourcesInReleaseBuilds: true,
                    enablePngCrunchInReleaseBuilds: true,
                    useClearTextTraffic: false,
                    extraProguardRules:
                        "-keep class io.invertase.firebase.** { *; } \n-dontwarn io.invertase.firebase.** \n-keep class com.google.firebase.** { *; } \n-keep class org.apache.** { *; } \n-keepnames class com.fasterxml.jackson.** { *; } \n-keepnames class javax.servlet.** { *; } \n-keepnames class org.ietf.jgss.** { *; } \n-dontwarn org.apache.** \n-dontwarn org.w3c.dom.** \n-keepattributes *Annotation* \n-keepattributes SourceFile,LineNumberTable \n-keep public class * extends java.lang.Exception \n-keep class com.rt2zz.reactnativecontacts.** {*;} \n-keepclassmembers class com.rt2zz.reactnativecontacts.** {*;} \n-keep class com.facebook.hermes.unicode.** { *; } \n-keep class com.facebook.jni.** { *; } \n-keep public class com.horcrux.svg.** {*;} \n-keep class expo.modules.** { *; }",
                },
                ios: {
                    useFrameworks: "static",
                },
            },
        ],
    ],
    orientation: "portrait",
    userInterfaceStyle: "light",
    androidStatusBar: {
        barStyle: "light-content",
        backgroundColor: "#000",
        hidden: true,
    },
    androidNavigationBar: {
        visible: "immersive",
    },
    icon: "./src/assets/splash.png",
    splash: {
        image: "./src/assets/splash.png",
        backgroundColor: "#000",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        buildNumber: "0.0.1",
        supportsTablet: true,
        entitlements: {
            "com.apple.developer.networking.wifi-info": true,
        },
        infoPlist: {
            CFBundleShortVersionString: "001",
            CFBundleDisplayName: "RNTestApp",
            LSApplicationCategoryType: "public.app-category.entertainment",
        },
        bundleIdentifier: "org.rntestapp.demo",
    },
    android: {
        versionCode: "001",
        version: "0.0.1",
        allowBackup: true,
        package: "com.rntestapp.demo",
    },
}
