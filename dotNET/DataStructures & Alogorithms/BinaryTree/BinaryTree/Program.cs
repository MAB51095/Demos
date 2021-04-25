using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model=BinaryTree.Models;

namespace BinaryTree
{
    class Program
    {
        static void Main(string[] args)
        {
            Model.BinarySearchTree bt = new Model.BinarySearchTree();

            bt.Insert(10);
            bt.Insert(2);
            bt.Insert(34);
            bt.Insert(4);
            bt.Insert(55);
            bt.Insert(6);
            bt.Insert(27);
            bt.Insert(8);
            bt.Insert(49);

        }
    }
}
