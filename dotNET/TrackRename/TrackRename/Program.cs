using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TagLib.Id3v2;

namespace TrackRename
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Ponniyin Selvan Volume  : ");
            string volume = Console.ReadLine();
            DirectoryInfo inputFolder = new DirectoryInfo(@"D:\secured\Mediatainment\AudioBooks\Ponniyin Selvan\Volume "+volume);

            FileInfo[] mp3s = inputFolder.GetFiles();

            foreach (var file in mp3s)
            {
                TagLib.File mp3 = TagLib.File.Create(file.FullName);

                string mp3track = mp3.Tag.Track < 10 ? "00" + mp3.Tag.Track : (mp3.Tag.Track < 100 ? "0" + mp3.Tag.Track : mp3.Tag.Track.ToString());

                string mp3newname = file.DirectoryName + "\\" + mp3track + "_" + mp3.Tag.Title + file.Extension;

                Console.WriteLine(string.Format("{0}---->{1}", file.FullName, mp3newname));

                File.Move(file.FullName, mp3newname);
            }
            Console.ReadKey();
        }
    }
}
