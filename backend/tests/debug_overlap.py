#!/usr/bin/env python3
"""重複付箋のデバッグ"""

def debug_overlaps():
    groups = {
        "食品": ["りんご", "バナナ", "チェリー", "アボカド"],
        "タスク": ["会議準備", "資料作成", "レビュー"],
        "アイデア": ["新機能", "改善提案", "ユーザビリティ", "パフォーマンス", "セキュリティ"],
        "その他": ["メモ1", "メモ2"]
    }
    
    group_offset_x = 550
    group_offset_y = 150
    child_offset_x = 220
    child_offset_y = 120
    
    def calculate_group_layout(notes_count, header_x, header_y):
        if notes_count <= 4:
            cols = 2
        elif notes_count <= 9:
            cols = 3
        elif notes_count <= 16:
            cols = 4
        else:
            cols = 5
        
        total_width = (cols - 1) * child_offset_x
        start_x = header_x - total_width / 2
        start_y = header_y + group_offset_y
        
        return cols, start_x, start_y
    
    def calculate_child_position(child_index, cols, start_x, start_y):
        row = child_index // cols
        col = child_index % cols
        
        child_x = start_x + col * child_offset_x
        child_y = start_y + row * child_offset_y
        
        return child_x, child_y
    
    base_x = -len(groups) * group_offset_x // 2
    base_y = 0
    
    all_positions = []
    
    for group_index, (group_name, notes) in enumerate(groups.items()):
        header_x = base_x + group_index * group_offset_x
        header_y = base_y
        
        cols, child_start_x, child_start_y = calculate_group_layout(
            len(notes), header_x, header_y
        )
        
        for child_index, note_text in enumerate(notes):
            child_x, child_y = calculate_child_position(
                child_index, cols, child_start_x, child_start_y
            )
            all_positions.append({
                "group": group_name,
                "text": note_text,
                "position": (child_x, child_y)
            })
    
    print("🔍 重複チェック:")
    overlap_found = 0
    for i, pos1 in enumerate(all_positions):
        for j, pos2 in enumerate(all_positions[i+1:], i+1):
            x_diff = abs(pos1["position"][0] - pos2["position"][0])
            y_diff = abs(pos1["position"][1] - pos2["position"][1])
            if x_diff < 180 and y_diff < 100:
                overlap_found += 1
                print(f"  ⚠️  重複 {overlap_found}: {pos1['group']}/{pos1['text']} vs {pos2['group']}/{pos2['text']}")
                print(f"     位置1: {pos1['position']}, 位置2: {pos2['position']}")
                print(f"     差分: x={x_diff:.1f}px, y={y_diff:.1f}px")
                print()
    
    if overlap_found == 0:
        print("  ✅ 重複なし！")
    
    return overlap_found == 0

if __name__ == "__main__":
    debug_overlaps()
