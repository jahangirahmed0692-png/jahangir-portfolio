import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon(){
  return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#0D0F0F",color:"#A7F3D0",fontSize:24,fontWeight:700,border:"2px solid #19B77A"}}>JA</div>,size);
}
