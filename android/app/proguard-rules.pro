# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Add any project specific keep options here:

# @generated begin expo-build-properties - expo prebuild (DO NOT MODIFY)
-keep class io.invertase.firebase.** { *; } 
-dontwarn io.invertase.firebase.** 
-keep class com.google.firebase.** { *; } 
-keep class org.apache.** { *; } 
-keepnames class com.fasterxml.jackson.** { *; } 
-keepnames class javax.servlet.** { *; } 
-keepnames class org.ietf.jgss.** { *; } 
-dontwarn org.apache.** 
-dontwarn org.w3c.dom.** 
-keepattributes *Annotation* 
-keepattributes SourceFile,LineNumberTable 
-keep public class * extends java.lang.Exception 
-keep class com.rt2zz.reactnativecontacts.** {*;} 
-keepclassmembers class com.rt2zz.reactnativecontacts.** {*;} 
-keep class com.facebook.hermes.unicode.** { *; } 
-keep class com.facebook.jni.** { *; } 
-keep public class com.horcrux.svg.** {*;} 
-keep class expo.modules.** { *; }
# @generated end expo-build-properties