#!/usr/bin/env python3
"""Jednorazovo nakreslí systémové pixel-art ikony pre plochu Win95 (32x32) do appky/pix/sys-*.png."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
OUT = Path(__file__).resolve().parent.parent / 'appky' / 'pix'
OUT.mkdir(parents=True, exist_ok=True)
K=(0,0,0,255); DG=(64,64,64,255); G=(128,128,128,255); L=(192,192,192,255); WH=(255,255,255,255); T=(0,128,128,255); N=(0,0,128,255)
Y=(255,255,0,255); DY=(128,128,0,255); R=(255,0,0,255); DR=(128,0,0,255); GR=(0,128,0,255); C=(0,255,255,255); B=(0,0,255,255); LG=(223,223,223,255)
def new(): im=Image.new('RGBA',(32,32),(0,0,0,0)); return im,ImageDraw.Draw(im)
def rect(d,x0,y0,x1,y1,fill=None,outline=None): d.rectangle((x0,y0,x1,y1),fill=fill,outline=outline)
def bevel(d,x0,y0,x1,y1,face=L):
    rect(d,x0,y0,x1,y1,face,K); d.line((x0+1,y0+1,x1-2,y0+1),fill=WH); d.line((x0+1,y0+1,x0+1,y1-2),fill=WH)
    d.line((x0+1,y1-1,x1-1,y1-1),fill=G); d.line((x1-1,y0+1,x1-1,y1-1),fill=G)
def sunk(d,x0,y0,x1,y1,fill):
    rect(d,x0,y0,x1,y1,fill); d.line((x0,y0,x1,y0),fill=G); d.line((x0,y0,x0,y1),fill=G); d.line((x0,y1,x1,y1),fill=WH); d.line((x1,y0,x1,y1),fill=WH)
icons={}
# môj počítač
im,d=new(); bevel(d,3,2,28,21); sunk(d,6,5,25,17,T); rect(d,9,8,17,13,WH); rect(d,9,8,17,9,N); d.point((20,14),fill=Y); d.point((21,14),fill=Y)
rect(d,12,22,19,23,L,K); bevel(d,6,24,25,28); d.line((19,26,22,26),fill=G); d.point((22,25),fill=GR); icons['computer']=im
# kôš
im,d=new(); rect(d,6,6,25,8,L,K); rect(d,12,3,19,5,L,K); rect(d,7,9,24,28,LG,K)
for x in (11,15,19): d.line((x,12,x,25),fill=G)
d.line((8,10,8,27),fill=WH); d.line((23,10,23,27),fill=G); icons['bin']=im
# priečinok
im,d=new(); rect(d,3,7,13,10,Y,DY); rect(d,3,10,28,26,Y,DY); d.line((4,11,27,11),fill=WH); d.line((4,25,27,25),fill=DY); d.line((27,12,27,25),fill=DY); icons['folder']=im
# kalendár
im,d=new(); rect(d,4,4,27,28,WH,K); rect(d,5,5,26,10,R); d.line((8,2,8,6),fill=K,width=2); d.line((23,2,23,6),fill=K,width=2)
f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',15); m=Image.new('L',(32,32),0); ImageDraw.Draw(m).text((16,19),'7',font=f,fill=255,anchor='mm')
px=im.load(); mp=m.load()
for y in range(32):
    for x in range(32):
        if mp[x,y]>140: px[x,y]=N
icons['calendar']=im
# poznámkový blok
im,d=new(); rect(d,7,5,24,28,WH,K); rect(d,7,5,24,8,B,K)
for x in (10,14,18,22): d.line((x,2,x,5),fill=K)
for y in (12,15,18,21,24): d.line((10,y,21,y),fill=G)
icons['notepad']=im
# mail
im,d=new(); rect(d,3,8,28,24,WH,K); d.line((4,9,15,17),fill=K); d.line((15,17,16,17),fill=K); d.line((27,9,16,17),fill=K); d.line((4,23,11,15),fill=G); d.line((27,23,20,15),fill=G); icons['mail']=im
# dokument/pdf
im,d=new(); rect(d,7,3,22,28,WH,K); d.polygon([(22,3),(25,6),(25,28),(22,28)],fill=LG,outline=K); rect(d,9,15,20,21,R); d.line((10,17,12,17),fill=WH); d.line((14,17,16,17),fill=WH); d.line((10,19,19,19),fill=WH)
for y in (7,10,12): d.line((9,y,19,y),fill=G)
icons['doc']=im
# blog / noviny
im,d=new(); rect(d,4,5,27,27,WH,K); rect(d,6,7,25,11,K)
for y in (14,17,20,23): d.line((6,y,15,y),fill=G)
rect(d,17,14,25,23,LG,G); icons['news']=im
# spustiť
im,d=new(); bevel(d,3,5,28,26); rect(d,5,7,26,10,N); sunk(d,6,13,25,24,WH); d.line((9,18,15,18),fill=K); d.polygon([(17,15),(22,18),(17,21)],fill=GR); icons['run']=im
# vypnúť
im,d=new(); bevel(d,5,3,26,24); sunk(d,8,6,23,17,K); d.line((16,8,16,13),fill=R,width=2); d.arc((11,8,20,16),-60,240,fill=R,width=2); rect(d,12,25,19,28,L,K); icons['power']=im
# nastavenia / vlastnosti
im,d=new(); bevel(d,3,4,28,27); rect(d,5,6,26,9,N); sunk(d,6,12,25,25,T); rect(d,9,15,14,20,Y); rect(d,16,15,22,22,R); icons['display']=im
for k,v in icons.items(): v.save(OUT/f'sys-{k}.png',optimize=True)
sheet=Image.new('RGBA',(len(icons)*72+8,80),(0,128,128,255))
for i,(k,v) in enumerate(icons.items()): sheet.paste(v.resize((64,64),Image.NEAREST),(8+i*72,8),v.resize((64,64),Image.NEAREST))
sheet.save('/tmp/w/sys.png'); print(list(icons))
