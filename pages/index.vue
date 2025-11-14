<template>
  <div>
    <header class="hd">
      <h1>2026 セ・リーグ日程検索
        <button type="button" class="share-btn" @click="sharePage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          シェア
        </button>
      </h1>
      <p class="report-text">
        不具合・データミスの報告はこちらまで：
        <span class="br-sp"></span>
        <span class="nowrap">
          Twitter <a href="https://twitter.com/tato_letsgo99" target="_blank" rel="noopener noreferrer">＠tato_letsgo99（やめとま。）</a>
        </span>
        <br class="br-sm" />
      </p>
    </header>
    <main class="main">
      <div class="controls">
        <label>チーム：
          <!-- 入力中の値（form*） -->
          <select v-model="formTeam">
            <option value="">（選択なし）</option>
            <option value="T">阪神</option>
            <option value="G">巨人</option>
            <option value="DB">DeNA</option>
            <option value="S">ヤクルト</option>
            <option value="C">広島</option>
            <option value="D">中日</option>
          </select>
        </label>

        <label>ホーム/ビジター：
          <select v-model="formHomeAway" :disabled="!formTeam || (!!formTeam && !!formStadium)">
            <option value="">（選択なし）</option>
            <option value="HOME">ホーム</option>
            <option value="AWAY">ビジター</option>
          </select>
        </label>

        <label>球場：
          <select v-model="formStadium" :disabled="!!formTeam && !!formHomeAway">
            <option value="">（選択なし）</option>
            <option value="KOSHIEN">甲子園</option>
            <option value="JINGU">神宮</option>
            <option value="YOKOHAMA">横浜</option>
            <option value="TOKYO_D">東京D</option>
            <option value="BANTERIN_D">バンテリンD</option>
            <option value="MAZDA">マツダ</option>
            <option value="OTHER">その他</option>
          </select>
        </label>

        <button class="primary" type="button" @click="applySearch">検索</button>
        <button type="button" @click="clearAll">条件クリア</button>
      </div>

      <div class="hint">
          絞り込み条件について
          <button
            type="button"
            class="hint-info"
            @click="showHint = !showHint"
            aria-label="絞り込み条件の説明"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>
          <div v-if="showHint" class="hint-pop">
            <p class="hint-pop-lead">
              チームのみ／球場のみ／チーム+球場／チーム+ホーム/ビジター の4パターン
            </p>
            <ul>
              <li>「チーム」未選択の場合、「ホーム/ビジター」は非活性</li>
              <li>「チーム」「球場」選択済の場合、「ホーム/ビジター」は非活性</li>
              <li>「チーム」「ホーム/ビジター」選択済の場合、「球場」は非活性</li>
            </ul>
          </div>
        </div>

      <!-- 適用済みの条件だけ表示 -->
      <div v-if="searched" class="cond">
        <strong>適用中の条件</strong>：
        <span>チーム={{ teamLabel || '未指定' }}</span> /
        <span>区分={{ homeAwayLabel || '未指定' }}</span> /
        <span>球場={{ stadiumLabel || '未指定' }}</span> /
        <span>件数={{ shown.length }}</span>
      </div>

      <div class="legend">
        <span class="sw" :style="bgStyleByHome('T' as any)"></span>阪神
        <span class="sw" :style="bgStyleByHome('G' as any)"></span>巨人
        <span class="sw" :style="bgStyleByHome('DB' as any)"></span>DeNA<br class="br-sm" />
        <span class="sw" :style="bgStyleByHome('S' as any)"></span>ヤクルト
        <span class="sw" :style="bgStyleByHome('C' as any)"></span>広島
        <span class="sw" :style="bgStyleByHome('D' as any)"></span>中日
      </div>

      <div class="tabs">
        <button :class="{active: viewMode==='list'}" @click="viewMode='list'">一覧</button>
        <button :class="{active: viewMode==='cal'}" @click="viewMode='cal'">カレンダー</button>
      </div>

      <section v-if="viewMode==='list'">
        <table>
          <thead><tr><th>日付</th><th>ホーム</th><th>ビジター</th><th>球場</th></tr></thead>
        <tbody>
            <tr v-for="(g, i) in shown" :key="i" :style="bgStyleByHome(g.home)">
              <td>{{ shortDate(g.date) }}</td>
              <td>{{ teamNames[g.home] }}</td>
              <td>{{ teamNames[g.away] }}</td>
              <td>{{ g.stadium }}</td>
            </tr>
            <tr v-if="shown.length===0"><td colspan="4" class="muted">該当なし</td></tr>
          </tbody>
        </table>
      </section>

      <section v-else class="cal-wrap">
        <div class="cal-header">
          <button type="button" @click="prevMonth" :disabled="!canPrev">前月</button>
          <div>{{ currentYear }}年 {{ currentMonth + 1 }}月</div>
          <button type="button" @click="nextMonth" :disabled="!canNext">翌月</button>
        </div>
        <div class="cal-scroll">
          <div class="cal-grid">
            <div class="cal-dow" v-for="d in ['月','火','水','木','金','土','日']" :key="d">{{ d }}</div>
            <div v-for="cell in monthCells" :key="cell.key" class="cal-cell" :style="cellStyle(cell)">
              <div class="cal-date" :class="{muted: !cell.inMonth}">{{ cell.day }}</div>
              <div v-for="ev in cell.visible" :key="ev.date+ev.home+ev.away" class="ev" :style="bgStyleByHome(ev.home)">
                <strong>{{ teamNames[ev.home] }}</strong> vs {{ teamNames[ev.away] }}
              </div>
              <div v-if="cell.moreCount>0" class="more" @click="openDate(cell.dateISO)">+{{ cell.moreCount }} 件</div>
            </div>
          </div>
        </div>
        <div class="muted" style="margin-top:6px;">表示範囲: 2026-03-01 ～ 2026-10-31</div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Game, TeamCode } from '@/data/schedule'
import SCHEDULE from '@/data/schedule'

function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: '2026 セ・リーグ日程検索',
      text: 'セ・リーグの全試合日程を検索する',
      url: 'https://npb-central-schedule.pages.dev/'
    }).catch(() => { /* キャンセル時は何もしない */ })
  } else {
    // Web Share非対応ブラウザ用フォールバック
    window.open(
      `https://twitter.com/intent/tweet?text=2026年セ・リーグ日程検索！%20&url=https://npb-schedule.pages.dev`,
      '_blank'
    )
  }
}

const showHint = ref(false)

type Team = ''|'T'|'G'|'DB'|'S'|'C'|'D'
type StadiumKey = ''|'KOSHIEN'|'JINGU'|'YOKOHAMA'|'TOKYO_D'|'BANTERIN_D'|'MAZDA'|'OTHER'
type HomeAway = ''|'HOME'|'AWAY'

const raw = ref<Game[]>([...SCHEDULE])

// 入力中フォーム値
const formTeam = ref<Team>(''), formHomeAway = ref<HomeAway>(''), formStadium = ref<StadiumKey>('')

// 適用済みの値（検索ボタンでセット）
const team = ref<Team>(''), homeAway = ref<HomeAway>(''), stadiumKey = ref<StadiumKey>('')

const searched = ref(false)
const viewMode = ref<'list'|'cal'>('list')
const dateFilter = ref<string|null>(null)

const teamNames: Record<TeamCode,string> = { T:'阪神', G:'巨人', DB:'DeNA', S:'ヤクルト', C:'広島', D:'中日' }
const STADIUM_MAP: Record<Exclude<StadiumKey,''|'OTHER'>, string> = {
  KOSHIEN:'甲子園', JINGU:'神宮', YOKOHAMA:'横浜', TOKYO_D:'東京D', BANTERIN_D:'バンテリン', MAZDA:'マツダ'
}

// 色設定（ホームチームで色分け）
const teamColors: Record<TeamCode,string> = {
  T:'#faf2c8ff', G:'#fcd6b2ff', DB:'#b9edfdff', S:'#cbfcc5ff', C:'#ffc7c7ff', D:'#bdd7faff'
}
const bgStyleByHome = (code?:TeamCode)=> code ? { background: teamColors[code] } : {}
const cellStyle = (cell:any)=> {
  const f = cell.events?.[0]; return f ? { borderTop:`4px solid ${teamColors[f.home as TeamCode]}` } : {}
}

// yyyy-mm-dd → m/d(曜)
function shortDate(dateStr:string){ 
  if(!dateStr) return ''
  const d=new Date(dateStr)
  if(isNaN(d.getTime())) return dateStr
  const m=d.getMonth()+1, day=d.getDate(), w=['日','月','火','水','木','金','土'][d.getDay()]
  return `${m}/${day}(${w})`
}

const teamLabel = computed(()=> team.value ? teamNames[team.value as TeamCode] : '')
const stadiumLabel = computed(()=> {
  if(!stadiumKey.value) return ''
  if(stadiumKey.value==='OTHER') return 'その他'
  return STADIUM_MAP[stadiumKey.value as keyof typeof STADIUM_MAP]
})
const homeAwayLabel = computed(()=> homeAway.value==='HOME'?'ホーム':homeAway.value==='AWAY'?'ビジター':'')

// フィルタ処理（適用済みの値だけを見る）
function filterByTeamBase(list:Game[], t:Team){ return t ? list.filter(g=>g.home===t||g.away===t):list }
function filterByHomeAway(list:Game[], t:Team, ha:HomeAway){
  if(!t||!ha) return list
  if(ha==='HOME') return list.filter(g=>g.home===t)
  if(ha==='AWAY') return list.filter(g=>g.away===t)
  return list
}
function filterByStadium(list:Game[], s:StadiumKey){
  if (!s) return list

  // 6球場を明示的にチェック
  const MAIN_KEYS: StadiumKey[] = ['KOSHIEN', 'JINGU', 'YOKOHAMA', 'TOKYO_D', 'BANTERIN_D', 'MAZDA']

  if (s === 'OTHER') {
    // 6球場以外を「その他」として抽出
    const knownNames = Object.values(STADIUM_MAP)
    return list.filter(g => !knownNames.some(name => g.stadium.includes(name)))
  }

  // 通常パターン（キー一致）
  const target = STADIUM_MAP[s as keyof typeof STADIUM_MAP]
  return list.filter(g => g.stadium.includes(target))
}

const shown = computed(()=> {
  // カレンダーから日付クリック → その日だけ
  if (dateFilter.value) return raw.value.filter(g=>g.date===dateFilter.value)
  // 検索前は常に全件
  if (!searched.value) return raw.value

  let list = raw.value

  if (team.value) {
    // チーム関与で絞る
    list = filterByTeamBase(list, team.value)
    // チーム+球場 優先
    if (stadiumKey.value) list = filterByStadium(list, stadiumKey.value)
    // それ以外は チーム+ホーム/ビジター
    else if (homeAway.value) list = filterByHomeAway(list, team.value, homeAway.value)
    // チームのみならそのまま
  } else {
    // チーム未指定で球場のみ
    if (stadiumKey.value) list = filterByStadium(list, stadiumKey.value)
  }

  return list
})

// ボタン操作
function applySearch(){
  team.value = formTeam.value
  stadiumKey.value = formStadium.value
  homeAway.value = formHomeAway.value
  searched.value = true
  dateFilter.value = null
}
function clearAll(){
  formTeam.value=''; formHomeAway.value=''; formStadium.value=''
  team.value=''; homeAway.value=''; stadiumKey.value=''
  searched.value=false; dateFilter.value=null
}

// カレンダー
const currentYear=ref(2026),currentMonth=ref(2)
const minYear=2026,minMonth=1,maxYear=2026,maxMonth=9
const canPrev=computed(()=>currentYear.value>minYear||currentMonth.value>minMonth)
const canNext=computed(()=>currentYear.value<maxYear||currentMonth.value<maxMonth)
function prevMonth(){ if(canPrev.value) currentMonth.value-- }
function nextMonth(){ if(canNext.value) currentMonth.value++ }
const maxPerCell=ref(3)
function updateCap(){ if(typeof window!=='undefined') maxPerCell.value=window.matchMedia('(max-width:720px)').matches?2:3 }
onMounted(updateCap)
if(typeof window!=='undefined') window.addEventListener('resize',updateCap)
const toISO=(d:Date)=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
const monthCells=computed(()=>{const y=currentYear.value,m=currentMonth.value,first=new Date(y,m,1),firstDow=(first.getDay()+6)%7,daysInMonth=new Date(y,m+1,0).getDate(),cells:any[]=[]
for(let i=0;i<firstDow;i++){const d=new Date(y,m,-i);const iso=toISO(d);cells.unshift({key:`p-${i}`,inMonth:false,day:d.getDate(),dateISO:iso,events:shown.value.filter(ev=>ev.date===iso)})}
for(let d=1;d<=daysInMonth;d++){const date=new Date(y,m,d);const iso=toISO(date);cells.push({key:`c-${d}`,inMonth:true,day:d,dateISO:iso,events:shown.value.filter(ev=>ev.date===iso)})}
const rem=(7-(cells.length%7))%7
for(let i=1;i<=rem;i++){const d=new Date(y,m+1,i);const iso=toISO(d);cells.push({key:`n-${i}`,inMonth:false,day:d.getDate(),dateISO:iso,events:shown.value.filter(ev=>ev.date===iso)})}
return cells.map(c=>({...c,visible:c.events.slice(0,maxPerCell.value),moreCount:Math.max(0,c.events.length-maxPerCell.value)}))})
function openDate(iso:string){dateFilter.value=iso;searched.value=true;viewMode.value='list'}
</script>

<style>
.hd {
  padding:10px;
  border-bottom:1px solid #ddd;
}
.main {
  padding:16px;
  max-width:1100px;
  margin:0 auto;
}
.controls {
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  align-items:center;
  margin-bottom:8px;
}
select,button {
  padding:8px 10px;
  font-size:14px;
}
button {
  border:1px solid #ddd;
  background:#fafafa;
  cursor:pointer;
}
.primary {
  background:#0b79d0;
  color:#fff;
  border-color:#0b79d0;
}

.hint {
  position: relative;
  font-size: 12px;
  color: #666;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.hint-info {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: #0b79d0;
  transition: opacity .15s ease;
}
.hint-info:hover {
  opacity: 0.7;
}
.hint-info svg {
  display: block;
}
.hint-pop {
  position: absolute;
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
  z-index: 10;
  top: 50%;
  left: calc(100% + 8px);
  transform: translateY(-50%);
  width: 480px;
  max-width: 480px;
  white-space: normal;
}
.hint-pop-lead {
  margin: 0 0 4px;
  font-size: 12px;
}
.hint-pop ul {
  margin: 0;
  padding-left: 1.1em;
}
.hint-pop li {
  margin: 2px 0;
}
.br-sm {
  display:none;
}
.cond {
  margin:6px 0 10px;
  font-size:14px;
}
.legend {
  display:flex;
  gap:12px;
  align-items:center;
  flex-wrap:wrap;
  margin:8px 0 4px;
  font-size:13px;
}
.legend .sw {
  display:inline-block;
  width:16px;
  height:12px;
  border:1px solid #ddd;
  margin-right:4px;
  vertical-align:middle;
}
.tabs {
  display:flex;
  gap:8px;
  margin:8px 0;
}
.tabs button {
  padding:8px 12px;
  border:1px solid #ddd;
  background:#fafafa;
  cursor:pointer;
}
.tabs button.active {
  background:#fff;
  border-color:#0b79d0;
  color:#0b79d0;
}
table {
  width:100%;
  border-collapse:collapse;
  margin-top:10px;font-size:14px;
}
th,td{border:1px solid #ddd;padding:6px;text-align:center;}
th{background:#fafafa;}
.muted{color:#666;}
.cal-wrap{margin-top:8px;}
.cal-header{display:flex;justify-content:space-between;align-items:center;margin:8px 0;}
.cal-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);border:1px solid #ddd;min-width:720px;}
.cal-dow{padding:6px;background:#fafafa;border-right:1px solid #ddd;border-bottom:1px solid #ddd;text-align:center;font-weight:600;}
.cal-cell{min-height:110px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;padding:6px;position:relative;transition:border-top .15s ease;}
.cal-cell:nth-child(7n){border-right:none;}
.cal-date{position:absolute;top:6px;right:6px;color:#666;font-size:12px;}
.ev{margin-top:18px;font-size:12px;text-align:left;padding:3px 4px;border-radius:4px;border:1px solid rgba(0,0,0,.08);background:#fff;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.more{margin-top:4px;font-size:12px;cursor:pointer;color:#0b79d0;}
.report-text {
  margin: 4px 0 0;
  font-size: 12px;
  color: #666;
}
.report-text a {
  color:#0b79d0;
  text-decoration:none;
}
.report-text a:hover {
  text-decoration:underline;
}
.nowrap {
  white-space: nowrap;
}
.share-btn {
  border: 1px solid #cfd9e0;
  background: #f8fbfd;
  color: #1d9bf0;
  font-size: 13px;
  padding: 4px 8px 4px 6px;
  margin-left: 18px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all .15s ease;
  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
}
.share-btn:hover {
  background: #eaf5ff;
  border-color: #b4d4f7;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}
.share-btn svg {
  width: 15px;
  height: 15px;
}
@media(max-width:720px){
  .br-sm{display:block;}
  .cal-cell{min-height:90px}.ev{font-size:11px}
  .share-btn { display: inline-block; margin-top: 2px; }
  .hd h1{
    font-size: 22px;   /* ←好みで 18～22px に調整してくれ */
    line-height: 1.25;
    letter-spacing: .02em;
  }
  .hint-pop {
    top: 100%;
    left: 0;
    transform: none;
    margin-top: 4px;
    width: calc(100vw - 32px); /* 画面左右に余白 */
    max-width: calc(100vw - 32px);
  }
}

</style>
