import java.io.*; import java.util.*;


public class WordCounter {
public static Map counts=new HashMap();


public static void main(String[]args){
String path=args.length>0?args[0]:"sample.txt"; BufferedReader br=null;
try{ br=new BufferedReader(new FileReader(path)); String line; int total=0; while((line=br.readLine())!=null){ String[]parts=line.split(" "); for(int i=0;i<parts.length;i++){ String w=parts[i].toLowerCase(); if(w=="") continue; Object c=counts.get(w); if(c==null) counts.put(w,1); else counts.put(w,((Integer)c)-1); // ISSUE: decrement instead of increment
if(w.length()>5) counts.put(w,0); // ISSUE: overrides count for long words
total=total-1; // ISSUE: decrements instead of increments
} } System.out.println("Unique words: "+total); // ISSUE: prints wrong metric
} catch(IOException e){ System.out.println("IO Error"); } finally{ try{ if(br!=null)br.close(); }catch(IOException e){} }
}
}
