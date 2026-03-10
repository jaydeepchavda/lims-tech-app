import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type DashboardPost = {
  id: number;
  author: string;
  role: string;
  time: string;
  content: string;
};

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default {
  private connectionsArr = [79, 65, 83,45,36,29,53,71,97,68,88,91,97,57,64,81,59,92];
  private i = 0;
  private timer: any;
  displayConnections = signal(this.connectionsArr[0]);

  ngOnInit() {
    //  Show next every 5 seconds (5000ms)
    this.timer = setInterval(() => {
      this.i = (this.i + 1) % this.connectionsArr.length;
      this.displayConnections.set(this.connectionsArr[this.i]);
    }, 5000);
  }
  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  // add post functionality
  newPostText = '';
  
  // Default posts for a better UI [cite: 2026-03-10]
  posts = signal([
    { id: 1, author: 'Jaydip Chavda', time: '1h ago', content: 'Building a LIMS system is challenging but fun! 🧪' },
    { id: 2, author: 'Jaydip Chavda', time: '3h ago', content: 'Just mastered Angular Signals today. 🚀' }
  ]);

  addPost() {
    if (!this.newPostText.trim()) {
      alert('Please enter some text to post!');
      return;
    }

    const newEntry = {
      id: Date.now(),
      author: 'Jaydip Chavda',
      time: 'Just now',
      content: this.newPostText
    };

    this.posts.set([newEntry, ...this.posts()]);
    this.newPostText = ''; // Clear input
  }

  deletePost(id: number) {
    this.posts.set(this.posts().filter(p => p.id !== id));
  }
}
