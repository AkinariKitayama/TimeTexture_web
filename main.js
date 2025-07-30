const broadcast = new BroadcastChannel("handDataChannel");

  //ビデオ入れ
    const mapMargin = 0.1;

// --- statusText globals ---
let statusText;
let currentStatusText = "";
// --- /statusText globals ---

 const videoSources = [
      
      {
      zoom: ["./eizoEV2455/konpass1.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.0, yMax: 1.0,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
          mapToTime(x, y, duration, distVal){
        if (!this.handSizeSeek) return 0;
        const base = this.handSizeSeek*1.4;
        const ratio = distVal / base;
        const clip = Math.min(Math.max(ratio, 0), 1);
        return clip * (duration - 1/60);
      }
      },
       {
      zoom: ["./eizoEV2455/konpass2.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.0, yMax: 1.0,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
          mapToTime(x, y, duration, distVal){
        if (!this.handSizeSeek) return 0;
        const base = this.handSizeSeek*1.4;
        const ratio = distVal / base;
        const clip = Math.min(Math.max(ratio, 0), 1);
        return clip * (duration - 1/60);
      }
      },
      {
      zoom: ["./eizoEV2455/zoom1.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.0, yMax: 1.0,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
          mapToTime(x, y, duration, distVal){
        if (!this.handSizeSeek) return 0;
        const base = this.handSizeSeek*1.4;
        const ratio = distVal / base;
        const clip = Math.min(Math.max(ratio, 0), 1);
        return clip * (duration - 1/60);
      }
      },
       {
      zoom: ["./eizoEV2455/zoom2.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.0, yMax: 1.0,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
          mapToTime(x, y, duration, distVal){
        if (!this.handSizeSeek) return 0;
        const base = this.handSizeSeek*1.4;
        const ratio = distVal / base;
        const clip = Math.min(Math.max(ratio, 0), 1);
        return clip * (duration - 1/60);
      }
      },
      {
      src:"./eizoEV2455/swipe1.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.3, yMax: 0.7,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
       {
      src:"./eizoEV2455/swipe2.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.3, yMax: 0.7,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
         {
      zoom: ["./eizoEV2455/densyaZoom.mp4"],
        xMin: 0.3, xMax: 0.7,
        yMin: 0.0, yMax: 1.0,
        hitPoint(x, y){
          return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin&&
                 y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
        },
          mapToTime(x, y, duration, distVal){
        if (!this.handSizeSeek) return 0;
        const base = this.handSizeSeek*1.4;
        const ratio = distVal / base;
        const clip = Math.min(Math.max(ratio, 0), 1);
        return clip * (duration - 1/60);
      }
      },
      {
      src:"./eizoEV2455/kawa.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (clip) * duration;
      }
      },
       {
      src:"./eizoEV2455/syabon.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
      {
      src:"./eizoEV2455/kawaTate.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      },
      {
      src:"./eizoEV2455/taki1.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (clip) * duration;
      }
      },
      {
      src:"./eizoEV2455/taki2.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (clip) * duration;
      }
      }, 
      {
      src:"./eizoEV2455/jagchi.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (clip) * duration;
      }
      },
       {
      src:"./eizoEV2455/glasses.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return clip * duration;
      }
      },
       {
      src:"./eizoEV2455/buildingWave.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (clip) * duration;
      }
      },
      {
      src:"./eizoEV2455/gamute.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.0, yMax: 1.0,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (clip) * duration;
      }
      },
         {
      src:"./eizoEV2455/jitensha.mp4",
         xMin: 0.1, xMax: 0.9,
         yMin: 0.3, yMax: 0.7,
      marginOn: true,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0), 1);
        return (1-clip) * duration;
      }
      }, 
      {
      src: "./eizoEV2455/hato.mp4",
      xMin: 0.2, xMax: 0.8,
      yMin: 0.0, yMax: 1.0,
      marginOn: true,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1 - clip) * duration - 1.5;
      }
      },
    
      {
      src: "./eizoEV2455/tori.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      marginOn: true,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1 - clip) * duration - 1.5;
      }
      },
      {
      src: "./eizoEV2455/fune.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      marginOn: true,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration - 1.5;
      }
      },
       {
      src: "./eizoEV2455/rittaiDoro1.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      marginOn: true,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration - 1.5;
      }
      },
        {
      src: "./eizoEV2455/fudepen.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      marginOn: true,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration - 1.5;
      }
      },
      {
      src: "./eizoEV2455/kazaguruma1.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      marginOn: true,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1 - clip) * duration;
      }
      },
      {
      src: "./eizoEV2455/kazaguruma2.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.0, yMax: 1.0,
      marginOn: true,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1 - clip) * duration;
      }
      },
      {
      src: "./eizoEV2455/gohan.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1 - clip) * duration;
      }
      },
      {
      src: "./eizoEV2455/natto.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1 - clip) * duration;
      }
      },
      {
      src: "./eizoEV2455/tamago.mp4",
      xMin: 0.1, xMax: 0.9,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration;
      }
      },
       {
      src: "./eizoEV2455/keyboadA2.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      marginOn: true, 
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1-clip) * duration;
      }
      },
       {
      src: "./eizoEV2455/keyboadA1.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      marginOn: true, 
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1-clip) * duration;
      }
      },
      {
        src: "./eizoEV2455/sinPoll.mp4",
        start: {x: 0.7, y: 0.7},
        end:   {x: 0.3, y: 0.3}, 
      },
      {
      src: "./eizoEV2455/densyaYoko.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration;
      }
      },
      {
      src: "./eizoEV2455/singoki1.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration;
      }
      },
      {
      src: "./eizoEV2455/shingokiTate.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      marginOn: true, 
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1 - clip) * duration;
      }
      },
      {
      src: "./eizoEV2455/tikatika.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration;
      }
      },
        {
      src: "./eizoEV2455/tokei.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      marginOn: true, 
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (y - this.yMin)/(this.yMax - this.yMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration;
      }
      },
      {
      src: "./eizoEV2455/blanco.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (1-clip) * duration;
      }
      },
          {
      src: "./eizoEV2455/bottle.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration;
      }
      },
                {
      src: "./eizoEV2455/bottle02.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration;
      }
      },
     {
      src: "./eizoEV2455/movKanban.mp4",
      xMin: 0.3, xMax: 0.7,
      yMin: 0.1, yMax: 0.9,
      
      hitPoint(x, y){
      return x >= this.xMin - mapMargin && x <= this.xMax + mapMargin
          && y >= this.yMin - mapMargin && y <= this.yMax + mapMargin;
      },
      
      mapToTime(x, y, duration){
        const t = (x - this.xMin)/(this.xMax - this.xMin);
        const clip = Math.min(Math.max(t, 0.01), 0.99);
        return (clip) * duration;
      }
      },
      
    ];

    videoSources.forEach(cfg => {


  if (cfg.start && cfg.end) {
   
    const sx = cfg.start.x, sy = cfg.start.y;
    const ex = cfg.end.x,   ey = cfg.end.y;
    const vx = ex - sx,     vy = ey - sy;
    const segLensq = vx*vx + vy*vy;

    cfg.hitPoint = (xNorm, yNorm) => {
      const mx = xNorm, my = yNorm;
      const wx = mx - sx, wy = my - sy;
      let t = (wx*vx + wy*vy)/segLensq;
      t = Math.min(Math.max(t, 0), 1);
      const px = sx + t*vx, py = sy + t*vy;
      return Math.hypot(mx-px, my-py) < mapMargin + 0.1;
    };

    cfg.mapToTime = (xNorm, yNorm, duration) => {
      const mx = xNorm, my = yNorm;
      const wx = mx - sx, wy = my - sy;
      let t = (wx*vx + wy*vy)/segLensq;
      t = Math.min(Math.max(t, 0), 1);
      return t * duration;
    };
  }
  
});



//const overlayVideo = document.getElementById("overlayVideo");
//overlayVideo.src = "./movs_high/Miller_A.webm";
//overlayVideo.play();

    let isOutputFullscreen = false;
    
    let currentVideoIndex = 0;
    let currentConfig = videoSources[currentVideoIndex]; 

    const video = document.getElementById('input');
    const canvas = document.getElementById('output');
    const ctx = canvas.getContext('2d');

    
    const videoFootage = document.getElementById('videoFootage');
    // const overlayCanvas = document.getElementById('overlayCanvas');
    // const overlayCtx = overlayCanvas.getContext('2d');


    let handSizeSeek = null;

    // ---------- seek‑queue helper ----------
    // 1) 連続 seek を直列化してデコード完了を待つ
    let pendingSeek = false;   // 現在 seek 中か
    let queuedSeek  = null;    // 次に送りたい time

    function requestSeek(time){
      if(!Number.isFinite(time)) return;       // 不正値ガード
      if(!pendingSeek){
        pendingSeek = true;
        videoFootage.currentTime = time;
      }else{
        queuedSeek = time;                     // 次の順番を覚える
      }
    }

    // seek 完了後に次を流す
    videoFootage.addEventListener('seeked', () => {
      pendingSeek = false;
      if(queuedSeek !== null){
        const next = queuedSeek;
        queuedSeek = null;
        requestSeek(next);                     // 再帰的に発射
      }
    });
    // ---------- /seek‑queue helper ----------
    
    var currentTimeHis = [];

    let loopCount = 0;
    let prevTimePos = 0;

    videoFootage.addEventListener("timeupdate", () => {
      if(pendingSeek)return;
      let videoRoaded = false;

      if (videoFootage.currentTime >= videoFootage.duration-1/60 && !(isPinching || wasPinching)) {
        loopCount++;
       if(!videoRoaded) {videoFootage.currentTime = 0;} else {
        videoFootage.pause;
        videoFootage.currentTime = videoFootage.duration;
       }
        if (loopCount >= 3) {
          videoRoaded = true;
          if (currentConfig.nextIndex) {

            switchVideo(currentConfig.nextIndex);

          } else {

            const random = Math.floor(Math.random() * videoSources.length + 1);
            switchVideo(random);

            }
        }
      }
      if(currentConfig.marginOn && !(isPinching || wasPinching)) {
        if(videoFootage.currentTime >= videoFootage.duration-2.1) {
          loopCount++;
       if(!videoRoaded) {videoFootage.currentTime = 1.0;} else {
        videoFootage.pause;
        videoFootage.currentTime = videoFootage.duration;
       }
        if (loopCount >= 3) {
          videoRoaded = true;
          if (currentConfig.nextIndex) {
            switchVideo(currentConfig.nextIndex);
          } else {
                const random = Math.floor(Math.random() * videoSources.length + 1);
              switchVideo(random);
            }
          }
        }
      }

      prevTimePos = videoFootage.currentTime;

      if(currentConfig.marginOn) {
        const startMargin = 1.0;
        const endMargin = videoFootage.duration - 2.1;
        
        if(videoFootage.currentTime < startMargin) {
          videoFootage.currentTime = startMargin;
        } else if(videoFootage.currentTime >= endMargin) {
          videoFootage.currentTime = startMargin;
        }
      }
    });
  

  
    function switchVideo(toIndex){    
      isPinching = false;
      wasPinching = false;
      lostFrames = 0;
      flagMargin = 0;
      window.historyY4 = [];
      window.historyY8 = [];
      window.historyX4 = [];
      window.historyX8 = [];
      videoFootage.pause();
      videoFootage.currentTime = 0;

      handSizeSeek = null;
      currentConfig.handSizeSeek = undefined;

      // 範囲内に収める
      currentVideoIndex = ((toIndex % videoSources.length) + videoSources.length) % videoSources.length;
      currentConfig = videoSources[currentVideoIndex];
      loopCount = 0;
      prevTimePos = 0;

    if (currentConfig.zoom) {
        videoFootage.style.display = "block";
        videoFootage.src = currentConfig.zoom[0];
        videoFootage.load();
        videoFootage.addEventListener('canplay', function handler() {
          videoFootage.removeEventListener('canplay', handler);
          videoFootage.play();
        });

      } else {
        videoFootage.style.display = "block";

        // 動画の切り替え
        videoFootage.src = currentConfig.src;
        videoFootage.load();
        videoFootage.addEventListener('canplay', function handler() {
          videoFootage.removeEventListener('canplay', handler);
          videoFootage.play();
        });
      }
    }

    let isPinching = false;
    let wasPinching = false;
    let pointAlpha = 1.0;
    
    let flagHitPoint = false;

    //手検出のロストフレームカウント
    let lostFrames = 0;
    const maxLostFrames = 30;
    let marginTimeCounter = 0;
    const marginTime = 4;

    let flagMargin = 0;


    let downTime = 2;

    let stopCurrentTime = 0;
    const stopMax = 300;

    let currentZ;
    let isnotSeek = false;

    let zoomMode = false;

    //marginTimeの補間用変数
    let endSeek = null;
    let startSeek = null;
    let isInterP = false;
    let interPoStartTime = null;
    const interPoDuration = 300;

    // スムージング用変数と係数
    let smoothedIndexPosX = 0;
    let smoothedIndexPosY = 0;
    const smoothingAlpha = 0.2; // 大きいほど追従速く、小さいほど滑らか 0.15にしてたけど要検討
    
    //関連ファイルの読み込み
    const config = {
      locateFile: file => `./mediapipe/hands/${file}`
    };
    const hands = new Hands(config);

    //カメラからの映像をhands.jsで使えるようにする
    const camera = new Camera(video, {
      onFrame: async () => {
        await hands.send({image: video});
      },
      width: 1920,
      height: 1080,
      frameRate: 60
    });

    hands.setOptions({
        maxNumHands: 4,              //検出する手の最大数
        modelComplexity: 1,          //ランドマーク検出精度(0か1)
        minDetectionConfidence: 0.7, //手を検出するための信頼値(0.0~1.0)　ここ0にしたら面白そう
        minTrackingConfidence: 0.6   //ランドマーク追跡の信頼度(0.0~1.0)
    });

    let handsAlpha = 1.0

    //形状認識した結果の取得
    hands.onResults(results => {

      const hands = results.multiHandLandmarks;
      let marks = null;
      if(hands && hands.length) {
        const closestIdx = hands.reduce(
          (bestIdx, hand, idx) => 
            hand[4].z < hands[bestIdx][4].z? idx : bestIdx, 0
        );
        marks = hands[closestIdx];
      }
  if (results.multiHandLandmarks) {
    results.multiHandLandmarks.forEach(hand => {


    });
  }

  // …then continue the rest of your pinch‐and‐seek logic…


      if(results.multiHandLandmarks){
       const landmarks = 
          results.multiHandLandmarks.map(hand =>
              hand.map(point => ({
                x: point.x,
                y: point.y,
                z: point.z
              }))  
          );
        }
      

      // -- /Draw landmarks on output canvas --

      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        lostFrames = 0;
        marginTimeCounter = 0;

        // (overlayCanvas/overlayCtx drawing removed)
        // results.multiHandLandmarks.forEach(marks => {
        if(marks) {  

          const ys = marks.map(point => point.y);
          const minY = Math.min(...ys);
          const maxY = Math.max(...ys);
          let handSize;

          let newTarget = 0;
          let duration = 0;

          // 指先の座標取得
          const fingPosX = marks[8].x;
          const fingPosY = marks[8].y;
          const fingPosX2 = marks[4].x;
          const fingPosY2 = marks[4].y;

          // スムージング用履歴管理
          if (!Array.isArray(window.historyY4)) window.historyY4 = [];
          if (!Array.isArray(window.historyY8)) window.historyY8 = [];
          if (!Array.isArray(window.historyX4)) window.historyX4 = [];
          if (!Array.isArray(window.historyX8)) window.historyX8 = [];

          let historyY4 = window.historyY4;
          let historyY8 = window.historyY8;
          let historyX4 = window.historyX4;
          let historyX8 = window.historyX8;

          const historyLength = 9;
          historyY4.push(fingPosY2);
          historyY8.push(fingPosY);
          if (historyY4.length > historyLength) historyY4.shift();
          if (historyY8.length > historyLength) historyY8.shift();
          const avgY4 = historyY4.reduce((a, b) => a + b, 0) / historyY4.length;
          const avgY8 = historyY8.reduce((a, b) => a + b, 0) / historyY8.length;

          historyX4.push(fingPosX2);
          historyX8.push(fingPosX);
          if(historyX4.length > historyLength) historyX4.shift();
          if(historyX8.length > historyLength) historyX8.shift();
          const avgX4 = historyX4.reduce((a, b) => a + b, 0) / historyX4.length;
          const avgX8 = historyX8.reduce((a, b) => a + b, 0) / historyX8.length;

          const rawX = (fingPosX + fingPosX2) / 2;
          const rawY = (fingPosY + fingPosY2) / 2;
          smoothedIndexPosX = smoothingAlpha * rawX + (1 - smoothingAlpha) * smoothedIndexPosX;
          smoothedIndexPosY = smoothingAlpha * rawY + (1 - smoothingAlpha) * smoothedIndexPosY;
          const smoothPosX = smoothedIndexPosX;
          const smoothPosY = smoothedIndexPosY;

          const dx = fingPosX - fingPosX2;
          const dy = fingPosY - fingPosY2;
          const distance = Math.hypot(dx, dy);
        
          let tikasa;
          let outTikasa;
          let currentHandSize = maxY - minY;
          tikasa = currentHandSize * 0.08;
          outTikasa = currentHandSize * 0.15;


          //console.log("marginTime :", marginTimeCounter);

          // console.log("zPos: ", currentZ);

            // isnotSeek = !(currentZ >= Z_MIN && currentZ <= Z_MAX);

          // ピンチ判定
          if (distance < tikasa) {
            duration = videoFootage.duration;
            let distVal = Math.abs(avgY8 - avgY4);
            newTarget = currentConfig.mapToTime(
              smoothedIndexPosX,
              smoothedIndexPosY,
              duration,
              distVal
            );
            //const lastTime = currentTimeHis.at(-1);
            //console.log(lastTime);
            
            if (!isPinching) {
              isPinching = true;
              wasPinching = true;
              if(handSizeSeek === null) {
                handSizeSeek = maxY - minY;
                currentConfig.handSizeSeek = handSizeSeek;
              }
              
            }
          } else if(distance > outTikasa) {
          //const lastTime = currentTimeHis.at(-1);
           // console.log(lastTime);
            isPinching = false;
            if (!isPinching) {

                videoFootage.play();
              
            }
          }

          if(isPinching){
            currentTimeHis.push(videoFootage.currentTime);
            if(currentTimeHis.length > 30)currentTimeHis.shift();
            // console.log(currentTimeHis.at(-1));
          }
        

if(isOutputFullscreen) return;

          // ヒットポイント外で wasPinching をリセット
          if (!currentConfig.hitPoint(fingPosX, fingPosY)) {
            wasPinching = false;
          }

          // 当たり判定内外で再生制御・マッピング
          const epsilon = 0.05;
          if (currentConfig.hitPoint(fingPosX, fingPosY)) {
            flagHitPoint = true;
            const duration =
                videoFootage.duration;
            let t = newTarget;

            if (currentConfig.start && currentConfig.end && isPinching) {
              videoFootage.pause();
              if (Number.isFinite(t)) {
                requestSeek(t);
                if(t < 0.01)t = 0;
                if(t > 0.99)t = videoFootage.duration;
              } else {
                // console.warn("Invalid start/end seek time:", t);
              }
            }
            else if (Array.isArray(currentConfig.dual) && isPinching) {
              // videoL.pause();
              // videoR.pause();
              if (isPinching) {
                if (Number.isFinite(t)) {
                  // videoL.currentTime = t;
                  // videoR.currentTime = t;
                  if(t < 0.01)t = 0;
                  if(t > 0.99)t = 1;
                } else {
                  // console.warn("Invalid seek time for dual:", t);
                }
              } 
              // else {
                // videoL.play();
                // videoR.play();
              // }
            } else if (currentConfig.zoom && wasPinching){
              videoFootage.pause();
              //Y距離
              const dyAbs = Math.abs(avgY8 - avgY4);
              //X距離
              const dxAbs = Math.abs(avgX8 - avgX4);

              const duration = videoFootage.duration;
              const distVal = (currentConfig.axis === "x")? dxAbs :
              dyAbs;

              const t = currentConfig.mapToTime(
                smoothPosX,
                smoothPosY,
                duration,
                distVal
              );

              // console.log("handSizeSeek : ", handSizeSeek)

              if (Number.isFinite(t)) {
                requestSeek(t);
              } else {
                // console.warn("Invalid zoom seek time:", t);
              }
            } else if(isPinching){
              videoFootage.pause();
              if (Number.isFinite(t)) {
                requestSeek(t);
              } else {
                // console.warn("Invalid pinch seek time:", t);
              }
            }
          } else if (!(isPinching && wasPinching)) {

           

            if (videoFootage.currentTime < videoFootage.duration - epsilon) {
              flagHitPoint = false;
              videoFootage.play();
              flagMargin = 0;
            }
          
          
          }



          if(isPinching && endSeek !== null) {
            startSeek = videoFootage.currentTIme;
            isInterP = true;
            requestAnimationFrame(interpolateSeek);
            endSeek = null;
          }


        }
      } else { // 指が消えたら
        if(isPinching && marginTimeCounter <= marginTime) {
          endSeek = videoFootage.currentTime;
          marginTimeCounter++
        } else {
        isPinching = false;
        wasPinching = false;
        flagHitPoint = false;
        lostFrames++;
        handSizeSeek = null;
        delete currentConfig.handSizeSeek;
        }
        // 最新の履歴値を常に表示
        if (currentTimeHis.length > 0) {
          //console.log(currentTimeHis[currentTimeHis.length - 1]);
        }
        //console.log("lostFrames:", lostFrames);
      }
      if(lostFrames > maxLostFrames){
      videoFootage.play().catch(() => {});
      // videoL.play().catch(() => {});
      // videoR.play().catch(() => {});
      lostFrames = 0;
      }

      

      // -- statusText update --
      let newMessage = "";
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        if (currentConfig.zoom) {
          if (!wasPinching && flagHitPoint) {
            newMessage = "つまむように、人差し指と親指を付けてください";
          } else if (wasPinching) {
            newMessage = "親指と人差し指をゆっくり離してください";
          }
        } else if (!isPinching) {
          newMessage = "つまむように、人差し指と親指を付けてください";
        } else if (flagHitPoint && isPinching) {
          newMessage = "そのまま、ゆっくり手をスライドさせてください";
        }
      } else {
        newMessage = "画面に片手を向けてください";
      }
      if (newMessage !== currentStatusText) {
        statusText.style.opacity = 0;
        setTimeout(() => {
          statusText.textContent = newMessage;
          statusText.style.opacity = 1;
          currentStatusText = newMessage;
        }, 300);
      }
      // -- /statusText update --



    }); // hands.onResults

    function interpolateSeek(timestamp){
      if(!isInterP) return;
      if(!interPoStartTime) interPoStartTime = timestamp; //補間のスタート時刻を記録

      if (!Number.isFinite(startSeek) || !Number.isFinite(endSeek)) {
    // console.warn("補間中止: 非有限値", { startSeek, endSeek });
    isInterP = false;
    return;
    }

     const elapsed = timestamp - interPoStartTime; //補間開始から今までの経過時間を計算
     const t = Math.min(elapsed / interPoDuration, 1);
     const interpTime = (1 - t) * endSeek + t * startSeek; //進行度を計算

       if (!Number.isFinite(interpTime)) {
    console.warn("補間中止: 非有限のcurrentTime", interpTime);
    isInterP = false;
    return;
  }

     videoFootage.currentTime = interpTime;

     if(t < 1) {
      requestAnimationFrame(interpolateSeek);
     } else {
      isInterP = false;
      interPoStartTime = null;
     }
    }
  

    

    //認識開始・終了ボタン
    /* document.getElementById('start')
      .addEventListener('click', () => camera.start()); */
      
window.addEventListener("DOMContentLoaded", () => {
    camera.start();
    switchVideo(0);
    // 初期状態を「d 押下時」の状態に設定：検知画面を非表示、videoFootageとdualContainerを中央に配置・拡大
    const outputElem = document.getElementById("output");
    const videos = document.getElementById("videoFootage");

    
    // 検知キャンバスを非表示
    outputElem.style.display = "none";
    // videoFootage を画面中央に拡大
    videos.style.width = "60%";
    videos.style.margin = "0";
    videos.style.position = "absolute";
    videos.style.top = "50%";
    videos.style.left = "50%";
    videos.style.transform = "translate(-50%, -50%)";
    

    
    // dualContainer を画面中央に拡大

});

   let isRunning = true;
     
    document.addEventListener("keydown", event => {
      if(event.key == "Enter"){
        if(isRunning){
          camera.stop();
          videoFootage.pause();
          // videoR.pause();
          // videoL.pause();
          lostFrames = 0;
        }else{
          camera.start();
          videoFootage.play();
          // videoR.play();
          // videoL.play();
        }
        isRunning = !isRunning
      }
    });

    const output = document.getElementById("output");
    const videos = document.getElementById("videoFootage");
    

    document.addEventListener("keydown", event => {
      if (event.key === "s") {
        switchVideo(currentVideoIndex + 1);
      } else if (event.key === "a") {
        switchVideo(currentVideoIndex - 1);
      } else if (event.key == "d") {
        if (output.style.display === "none") {

          


        } else {
          isOutputFullscreen = false;
          output.classList.add("hidden");
          output.style.display = "none";
          videos.style.display = "block"
          videos.style.width = "60%";
          videos.style.margin = "0";
          videos.style.position = "absolute";
          videos.style.top = "50%";
          videos.style.left = "50%";
          videos.style.transform = "translate(-50%, -50%)";
          videos.style.zIndex = "";
         
        }
      }
    });

    // statusText DOM init
    statusText = document.getElementById('statusText');
    currentStatusText = '';
