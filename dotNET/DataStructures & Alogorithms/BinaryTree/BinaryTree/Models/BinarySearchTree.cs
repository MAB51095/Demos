using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BinaryTree.Models
{
    public class BinarySearchTree
    {
        public Node root { get; set; }
        
        public BinarySearchTree()
        {
            root = null;
        }

        public BinarySearchTree(int data)
        {
            root = new Node(data);
        }

        public void Insert(int data)
        {
            root = InsertToNode(root,data);
        }

        private Node InsertToNode(Node node, int data)
        {
            if(node == null)
            {
                node = new Node(data);
            }
            else
            {
                if (data < node.Data)
                {
                    node.Left = InsertToNode(node.Left, data);
                }
                else
                {
                    node.Right = InsertToNode(node.Right, data);
                }
            }

            return node;
        }
    }
}
