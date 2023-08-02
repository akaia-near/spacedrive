/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function appReady() {
    return invoke()<null>("app_ready")
}

export function resetSpacedrive() {
    return invoke()<null>("reset_spacedrive")
}

export function openLogsDir() {
    return invoke()<null>("open_logs_dir")
}

export function openFilePaths(library: string, ids: number[]) {
    return invoke()<OpenFilePathResult[]>("open_file_paths", { library,ids })
}

export function getFilePathOpenWithApps(library: string, ids: number[]) {
    return invoke()<OpenWithApplication[]>("get_file_path_open_with_apps", { library,ids })
}

export function openFilePathWith(library: string, fileIdsAndUrls: ([number, string])[]) {
    return invoke()<null>("open_file_path_with", { library,fileIdsAndUrls })
}

export function revealItems(library: string, items: RevealItem[]) {
    return invoke()<null>("reveal_items", { library,items })
}

export function lockAppTheme(themeType: AppThemeType) {
    return invoke()<null>("lock_app_theme", { themeType })
}

export type OpenWithApplication = { url: string; name: string }
export type OpenFilePathResult = { t: "NoLibrary" } | { t: "NoFile"; c: number } | { t: "OpenError"; c: [number, string] } | { t: "AllGood"; c: number } | { t: "Internal"; c: string }
export type AppThemeType = "Auto" | "Light" | "Dark"
export type RevealItem = { Location: { id: number } } | { FilePath: { id: number } }
