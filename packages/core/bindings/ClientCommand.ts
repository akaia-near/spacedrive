export type ClientCommand =
  | { key: 'FileRead'; params: { id: bigint } }
  | { key: 'FileDelete'; params: { id: bigint } }
  | { key: 'LibDelete'; params: { id: bigint } }
  | { key: 'TagCreate'; params: { name: string; color: string } }
  | { key: 'TagUpdate'; params: { name: string; color: string } }
  | { key: 'TagAssign'; params: { file_id: bigint; tag_id: bigint } }
  | { key: 'TagDelete'; params: { id: bigint } }
  | { key: 'LocCreate'; params: { path: string } }
  | { key: 'LocUpdate'; params: { id: bigint; name: string | null } }
  | { key: 'LocDelete'; params: { id: bigint } }
  | { key: 'SysVolumeUnmount'; params: { id: bigint } };
