import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/models/iarticle';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private ArticleService: ArticleService) {
    this.getArticlesData();
  }

  articlesData: IArticle[] = [];
  isLoading = false;
  articlesSubscription = new Subscription();
  isModalOpen = false;

  ngOnInit(): void {}

  getArticlesData(): void {
    this.isLoading = true;
    this.articlesSubscription = this.ArticleService.getArticles().subscribe(
      (resp) => {
        this.articlesData = resp;
        this.isLoading = false;
      }
    );
  }

  ngONDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }

  togleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }
}