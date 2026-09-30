import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { App } from '@capacitor/app';
import { FileOpener } from '@capacitor-community/file-opener';
import { TextRecognition } from '@capacitor-mlkit/text-recognition';
if (Capacitor.isNativePlatform()) {
  window.NATIVE = { Capacitor, Filesystem, Directory, Share, App, FileOpener, TextRecognition };
}
