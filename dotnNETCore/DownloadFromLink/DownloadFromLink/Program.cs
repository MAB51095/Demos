using System;
using System.Net;

namespace DownloadFromLink
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("____DownloadFromLink____");
            Console.WriteLine("Change code to download the files you want");

            const string link = "http://www.truemuslims.net/download.php?path=Quran/Tamil/{0}.mp3";
            const string saveFile = "{0}.mp3";
            
            for(int i = 1; i <= 114; i++)
            {
                string mp3 = i.ToString();
                mp3 = i < 10 ? "00" + mp3 : (i < 100 ? "0"+ mp3: mp3);
                string downloadLink = string.Format(link,  mp3);
                Console.WriteLine("Downloading...{0}", string.Format(saveFile, mp3));

                using (var client = new WebClient())
                {
                    client.DownloadFile(string.Format(link, mp3), string.Format(saveFile, mp3));
                }

                Console.WriteLine("Completed...{0}", string.Format(saveFile, mp3));
            }
        }
    }
}
